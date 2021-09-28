<template>
    <div class="stash">
        <h1>
            Stash
            <CloseButton @click="$emit('close-stash')" />
        </h1>

        <div class="runes">
            <figure class="rune"
                    v-for="rune in Runes"
                    @click.left="Stash.add(rune)"
                    @click.right.prevent="Stash.remove(rune)"
                    :class="{ active: Stash.amount(rune) > 0 }"
                    :title="Stash.amount(rune) + ' ' + rune.name + '. Cube with ' + craftWith(rune)">

                <div class="rune-image">
                    <img :src="rune.image" :alt="rune.name">
                </div>

                <figcaption class="rune-caption">
                    {{ rune.name }}

                    <sup class="rune-amount">{{ Stash.amount(rune) }}</sup>
                </figcaption>
            </figure>
        </div>

        <p><i><small>* Left click to add, right click to remove</small></i></p>
    </div>
</template>

<script>
import { Stash } from '@App/Container';

import CloseButton from '@App/Component/CloseButton';
import Runes from '@App/Runes';

export default {
    components: {
        CloseButton,
    },
    data() {
        return {
            Stash,
            Runes,
        };
    },
    methods: {
        craftWith(rune) {
            return rune.recipe?.map(r => r.name).join(', ');
        },
    },
};
</script>