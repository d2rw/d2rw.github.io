import '@Asset/scss/web.scss';

import Vue from 'vue';
import App from '@App/App';

import {Translator} from '@App/Container';

Vue.mixin({
    filters: {
        trans: (index, parameters = {}) => Translator.trans(index, parameters),
    },
    methods: {
        trans: (index, parameters = {}) => Translator.trans(index, parameters),
    },
});

window.App = new Vue({
    el: '#app',
    render: h => h(App),
});