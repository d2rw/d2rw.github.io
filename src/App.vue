<template>
	<div class="layout-main">
        <Stash v-if="stash" @close-stash="toggleStash" />
        <Runewords v-else @open-stash="toggleStash" />

        <Gem />
	</div>
</template>

<script>
import Stash from '@App/Component/Stash';
import Runewords from '@App/Component/Runewords';
import Gem from '@App/Component/Gem';
import {Storage} from "@App/Container";

export default {
    components: {
        Stash,
        Runewords,
        Gem,
    },
    data() {
        return {
            stash: Storage.get('stash', false),
        };
    },
    methods: {
        toggleStash() {
            this.stash = Storage.set('stash', !this.stash);
        },
    },
};
</script>