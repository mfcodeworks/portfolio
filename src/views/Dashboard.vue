<template>
    <main>

    </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { AssetList } from '@/types';

enum State {
    DEFAULT = 0,
    LOADING
}

@Options({})
export default class Dashboard extends Vue {
    currentState = State.DEFAULT;
    stats: AssetList = {};

    created() {
        // TODO: WebWorker calculation
        this.stats = {};
    }
}
</script>
