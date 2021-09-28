<template>
    <div class="gem">
        <img v-if="active" src="@Image/gem_on.png" @click="toggle">
        <img v-else src="@Image/gem_off.png" @click="toggle">
    </div>
</template>

<script>
import { Storage } from '@App/Container';

export default {
    data() {
        return {
            active: Storage.get('gem', false),
        };
    },
    methods: {
        toggle() {
            this.active = Storage.set('gem', !this.active);
        },
    },
}
</script>