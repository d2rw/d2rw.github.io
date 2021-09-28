export default class Storage {
    private _available: boolean = undefined;
    private readonly prefix: string;

    constructor(prefix: string = 'app.') {
        this.prefix = prefix;
    }

    set(item: string, value: any): any {
        if (!this.available) {
            throw new Error('Storage is not available, caught trying to set item: ' + this.prefix + item);
        }

        const jsonValue = JSON.stringify(value);
        localStorage.setItem(this.prefix + item, jsonValue);

        return value;
    }

    get(item: string, defaultValue: any = null, suppress: boolean = false): any {
        if (!this.available) {
            if (!suppress) {
                throw new Error('Storage is not available, caught trying to get item: ' + this.prefix + item);
            }

            return defaultValue;
        }

        let value = localStorage.getItem(this.prefix + item);
        if (null === value) {
            return defaultValue;
        }

        let data = defaultValue;
        try {
            let result = JSON.parse(value);
            if (null !== result) {
                data = result;
            }
        } catch (e) {
        }

        return data;
    }

    remove(item: string): any {
        if (!this.available) {
            throw new Error('Storage is not available, caught trying to remove item: ' + this.prefix + item);
        }

        let value = this.get(this.prefix + item);
        localStorage.removeItem(this.prefix + item);

        return value;
    }

    clear() {
        if (!this.available) {
            throw new Error('Storage is not available, caught trying to clear storage');
        }

        localStorage.clear();
    }

    get available() {
        if (undefined === this._available) {
            try {
                const s = 'local-storage-test';
                localStorage.setItem(s, s);
                localStorage.removeItem(s);

                this._available = true;
            } catch (e) {
                this._available = false;
            }
        }

        return this._available;
    }
}
