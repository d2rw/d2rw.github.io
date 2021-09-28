<template>
    <div class="runewords">
        <h1>
            Runewords &mdash;
            <template v-if="FilteredRunewords.length !== All.length">{{ FilteredRunewords.length }}/{{ All.length }}</template>
            <template v-else>{{ All.length }}</template>

            <StashButton @click="$emit('open-stash')" />
        </h1>

        <form class="runeword-filter">
            <fieldset>
                <label>
                    Name
                    <input type="text" v-model="filters.name">
                </label>

                <label class="checkbox">
                    <input type="checkbox" v-model="filters.haveRunes">
                    Group items I have the runes for.
                </label>

                <small><i>Add runes using the cube icon at the top</i></small>
            </fieldset>

            <fieldset>
                Show runewords for
                <select v-model="filters.item">
                    <option value>Anything</option>
                    <option v-for="item in Items" :value="item">{{ trans('item.' + item) }}</option>
                </select>
                with
                <select v-model="filters.sockets">
                    <option value>any amount of</option>
                    <option v-for="index in 5" :value="index + 1">{{ index + 1 }}</option>
                </select> {{ trans('sockets', { count: filters.sockets }) }}.
            </fieldset>
        </form>

        <section v-if="!filters.haveRunes" class="runewords-list">
            <article>
                <Runeword v-for="runeword in FilteredRunewords" :runeword="runeword" :key="runeword.name" :stat-colors="settings.statColors" :stat-sorts="settings.statSorts" />
            </article>
        </section>
        <template v-else>
            <details v-if="AvailableRunewords.length > 0" class="runewords-list" open>
                <summary><h2>Available runewords &mdash; {{ AvailableRunewords.length }}</h2></summary>
                <article>
                    <Runeword v-for="runeword in AvailableRunewords" :runeword="runeword" :key="runeword.name" :stat-colors="settings.statColors" :stat-sorts="settings.statSorts" />
                </article>
            </details>
            <p v-else>No results are found.</p>

            <details v-if="UnavailableRunewords.length" class="runewords-list">
                <summary><h2>Unavailable runewords &mdash; {{ UnavailableRunewords.length }}</h2></summary>
                <article>
                    <Runeword v-for="runeword in UnavailableRunewords" :runeword="runeword" :key="runeword.name" :stat-colors="settings.statColors" :stat-sorts="settings.statSorts" />
                </article>
            </details>
        </template>

        <p>
            <small><label class="checkbox"><input type="checkbox" v-model="settings.statColors"> enable stats colors</label></small>
            <small><label class="checkbox"><input type="checkbox" v-model="settings.statSorts"> sort stats by type instead of order on item</label></small>
        </p>
    </div>
</template>

<script>
import Items from '@App/Type/Item';
import Runewords from '@App/Runewords';

import { Stash, Storage } from '@App/Container';

import StashButton from '@App/Component/StashButton';
import Runeword from '@App/Component/Runeword';

const simplifyRegex = /[^a-z\d+]/gi;

const filters = Object.assign({
    name: undefined,
    sockets: '',
    item: '',
    haveRunes: false,
}, Storage.get('runeword_filters', {}));

const settings = Object.assign({
    statColors: true,
    statSorts: false,
}, Storage.get('runeword_settings', {}));

export default {
    components: {
        StashButton,
        Runeword,
    },
    data() {
        return {
            filters,
            settings,

            Stash,
            Items,
        }
    },
    computed: {
        All() {
            return Object.values(Runewords).sort((a, b) => a.name.localeCompare(b.name));
        },
        FilteredRunewords() {
            return this.All.filter(runeword => {
                if (this.filters.name) {
                    const nameRegex = new RegExp(this.filters.name.replace(simplifyRegex, '.*'), 'i');
                    if (!runeword.name.replace(simplifyRegex, '').match(nameRegex)) {
                        return false;
                    }
                }

                if (this.filters.item && runeword.items.indexOf(this.filters.item) === -1) {
                    return false;
                }

                if (typeof(this.filters.sockets) === 'number' && runeword.runes.length !== parseInt(this.filters.sockets)) {
                    return false;
                }

                return true;
            });
        },
        AvailableRunewords() {
            return this.FilteredRunewords.filter(runeword => Stash.match(runeword.runes).available);
        },
        UnavailableRunewords() {
            return this.FilteredRunewords.filter(runeword => !Stash.match(runeword.runes).available);
        },
    },
    watch: {
        filters: {
            handler: v => Storage.set('runeword_filters', v),
            deep: true,
        },
        settings: {
            handler: v => Storage.set('runeword_settings', v),
            deep: true,
        },
    },
};
</script>