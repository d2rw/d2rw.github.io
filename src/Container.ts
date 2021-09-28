import StorageClass from '@App/Storage';
const Storage = new StorageClass('d2rw');

import StashClass from '@App/Stash';
const Stash = new StashClass(Storage);

import TranslatorClass from '@App/Translator';

import en from '@App/../translations/en.yaml';

const Translator = new TranslatorClass({
    en,
});

export {
    Storage,
    Stash,
    Translator,
};