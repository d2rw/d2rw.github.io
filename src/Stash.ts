import Rune from '@App/Rune';
import Storage from '@App/Storage';
import Vue from 'vue';

const STORAGE_INDEX = 'runes';

export default class Stash {
    public runes: {
        key: number,
        value: number
    };

    private storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;

        this.runes = this.storage.get(STORAGE_INDEX, {});
    }

    add(rune: Rune, amount: number = 1): this {
        if (!this.runes[rune.id]) {
            Vue.set(this.runes, rune.id, 0);
        }

        this.runes[rune.id] += amount;
        this.storage.set(STORAGE_INDEX, this.runes);

        return this;
    }

    remove(rune: Rune, amount: number = 1): this {
        const value = this.runes[rune.id];
        if (value && value > 0) {
            this.runes[rune.id] = Math.max(value - amount, 0);
        }

        this.storage.set(STORAGE_INDEX, this.runes);

        return this;
    }

    amount(rune: Rune): number {
        return this.runes[rune.id] || 0;
    }

    clear() {
        for (let k in this.runes) {
            Vue.delete(this.runes, k);
        }
    }

    match(runes: Runes[]): Object {
        const result = { available: true, counter: [] };

        const required = {};
        for (let i = 0; i < runes.length; i++) {
            const rune = runes[i];
            if (!required[rune.id]) {
                required[rune.id] = 0;
            }

            required[rune.id]++;

            result.counter.push({
                rune,
                index: required[rune.id],
                available: this.amount(rune) >= required[rune.id],
            });
        }

        for (let i = 0; i < result.counter.length; i++) {
            const c = result.counter[i];
            c.total = required[c.rune.id];

            if (!c.available) {
                result.available = false;
            }
        }

        return result;
    }
}
