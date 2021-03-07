<template>
    <main>
        <DoughnutChart
            :data="portfolio"
            label="Portfolio"
            class="w-56"
        />
    </main>
</template>

<script lang="ts">
import { AssetList } from '@/types';
import DoughnutChart from '@/components/DoughnutChart.vue';
import { defineComponent, ref } from 'vue';

enum State {
    DEFAULT = 0,
    LOADING
}

export default defineComponent({
    components: {
        DoughnutChart
    },
    setup() {
        const currentState = ref(State.DEFAULT);
        const stats = ref<AssetList>({});
        const portfolio = ref({ ltc: 50, eth: 32 });

        const component = {
            currentState,
            stats,
            portfolio
        };
        console.warn('DASHBOARD SETUP', component);
        return component;
    }
});
</script>
