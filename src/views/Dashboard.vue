<template>
    <main>
        <div>
            <DoughnutChart
                v-model:data="portfolio"
                label="Portfolio"
            />
        </div>
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
        const portfolio = ref({ ltc: 50 });

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
