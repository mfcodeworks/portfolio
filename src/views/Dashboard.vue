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
import { defineComponent, ref, onMounted } from 'vue';
import percentChange from '@/workers/percent-change';

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

        onMounted(async () => {
            console.log('Calculating difference');

            console.time('percentChange');
            percentChange({
                oldData: 300,
                newData: 600
            }).then((result) => {
                console.log('percentChange()', result);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.timeEnd('percentChange');
            });

            console.time('percentChangeList');
            percentChange([
                {
                    oldData: 600,
                    newData: 300
                }, {
                    oldData: 40,
                    newData: 87.6
                }, {
                    oldData: NaN,
                    newData: 40
                }, {
                    oldData: 0,
                    newData: -17
                }, {
                    oldData: 1870000,
                    newData: 256000000
                }
            ]).then((result) => {
                console.log('percentChange() list', result);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.timeEnd('percentChangeList');
            });
        });

        return {
            currentState,
            stats,
            portfolio
        };
    }
});
</script>
