<template>
    <div class="runeword">
        <h3>
            <span class="runeword-name">{{ runeword.name }}</span>
            <small class="runeword-item">
                {{ runeword.runes.length }} socket
                <span v-for="item in runeword.items">{{ trans('item.' + item) }}</span>
            </small>
            <!-- <small class="runeword-ladder" v-if="runeword.ladder">Ladder only</small> -->
        </h3>

        <div class="runes">
            <figure class="rune" v-for="counter in Runes.counter" :class="{ active: counter.available }">
                <figcaption class="rune-caption">
                    <span class="rune-amount">{{ counter.rune.name }}</span>

                    <sup v-if="counter.available">{{ Stash.amount(counter.rune) }}</sup>
                    <sup v-else>
                        <span>{{ Stash.amount(counter.rune) }}</span><!--
                        --><span v-if="counter.total > 1">/{{ counter.index }}</span>
                    </sup>
                </figcaption>
            </figure>
        </div>

        <div class="stats" :class="{ 'stat-colors-enabled': statColors }">
            <ul v-if="Array.isArray(Stats)">
                <li v-for="stat in Stats" :class="'stat stat-' + stat.type" :key="stat.description">{{ stat.description }}</li>
            </ul>
            <ul class="stats-items" v-else>
                <li v-for="(stats, item) in Stats" class="stats-item">
                    <span>{{ trans('item.' + item, { count: 1 }) }}</span>
                    <ul>
                        <li v-for="stat in stats" :class="'stat stat-' + stat.type" :key="stat.description">{{ stat.description }}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Runeword from "@App/Runeword";
import StatsType from "@App/Type/Stat";

import { Stash } from '@App/Container';

const statValues = Object.values(StatsType);
function statSorts(a, b) {
    return statValues.indexOf(a.type) > statValues.indexOf(b.type) ? 1 : -1;
}

export default {
    props: {
        runeword: Runeword,
        statColors: Boolean,
        statSorts: Boolean,
    },
    data() {
        return {
            Stash,
        };
    },
    mounted() {
        if (this.runeword.name !== 'Sanctuary') {
            return;
        }

        console.log(Stash.match(this.runeword.runes));
    },
    computed: {
        Runes() {
            return Stash.match(this.runeword.runes);
        },
        Stats() {
            let stats = this.runeword.stats;
            if (!this.statSorts) {
                return stats;
            }

            if (Array.isArray(stats)) {
                stats = stats.slice().sort(statSorts);
            } else {
                for (let key in stats) {
                    stats[key] = stats[key].slice().sort(statSorts);
                }
            }

            return stats;
        },
    },
};
</script>