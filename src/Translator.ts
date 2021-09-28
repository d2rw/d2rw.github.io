export default class Translator {
    constructor(
        public messages: { [locale]: string, value: any },
        public locale: string = 'en'
    ) {
        this.messages = messages;
        this.locale = locale;
    }

    trans(index: string, parameters: { key: string, value: any } = {}) {
        let values = index.split('.').reduce((o,i) => o[i], this.messages[this.locale]);
        if (undefined === values) {
            return
        }

        let value = values;
        if (typeof(values) == 'object' && null !== values) {
            if (this.objectIsAssociative(values)) {
                if (parameters && values.hasOwnProperty(parameters.key)) {
                    value = values[parameters.key];
                } else {
                    if (values.hasOwnProperty('default')) {
                        value = values['default'];
                    } else {
                        console.warn('Missing key parameter and default from trans choice associative array translation.');
                    }
                }
            } else {
                if (parameters.hasOwnProperty('count')) {
                    // loop through numbers to find matching for count
                    let c = parameters.count || 0;
                    for (let k in values) {
                        k = parseInt(k);

                        if (isNaN(k)) {
                            console.warn('Using non numbered index for trans choice.');
                            continue;
                        }

                        if (k <= c) {
                            value = values[k];
                        } else {
                            break;
                        }
                    }
                } else {
                    value = values;
                }
            }
        }

        value = this.replaceParameters(value, parameters);

        return undefined === value
            ? index
            : value;
    }

    objectIsAssociative(obj: Object) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (isNaN(parseInt(keys[i]))) {
                return true;
            }
        }

        return false;
    }

    replaceParameters(message, parameters) {
        if ((typeof(message) === 'string') && (typeof(parameters) === 'object')) {
            for (let k in parameters) {
                let match = new RegExp('{{ ?(' + k + ') ?}}', 'gi');
                message = message.replace(match, parameters[k]);
            }
        }

        return message;
    }
}
