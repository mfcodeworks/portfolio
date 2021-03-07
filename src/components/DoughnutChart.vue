<template>
    <div v-if="data" ref="wrapper" class="relative square">
        <canvas
            ref="chart"
            :height="height"
            :width="width"
            :aria-label="`${label} Chart`"
            role="img"
        >
            <p>
                Your browser doesn't support the canvas element and cannot
                render charts. Please update your browser to a version that
                supports &lt;canvas&gt;.
            </p>
        </canvas>
    </div>
    <div v-else>
        N/A
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    watch,
    computed,
    ref,
    PropType,
    onMounted,
    onBeforeUnmount
} from 'vue';
import {
    Chart,
    ChartConfiguration,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    ChartData
} from 'chart.js';
import { objectsAreEqual } from '@/utils/objects-are-equal';

// Register DoughnutChart
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, Title);

// Setup state
enum State {
    DEFAULT = 0,
    NO_DATA_ERROR,
    NO_CANVAS_ERROR,
    NO_CONFIG_ERROR
}

export default defineComponent({
    inheritAttrs: true,
    props: {
        data: {
            type: Object as PropType<Record<string, number>>,
            default: {}
        },
        label: {
            type: String,
            required: false
        }
    },
    setup(props) {
        /* Declare local state */
        const state = State;
        const currentState = ref(state.DEFAULT);
        const wrapper = ref<HTMLElement|null>(null);
        const chart = ref<HTMLCanvasElement|null>(null);
        const chartRender = ref<Chart|null>(null);
        const ctx = ref<CanvasRenderingContext2D|null>(null);

        /* Declare local getters */
        // Canvas size
        const width = computed(() => wrapper.value?.clientWidth ?? 200);
        const height = computed(() => wrapper.value?.clientHeight ?? 200);
        // Chart dataset labels
        const labels = computed(() => Object.keys(props.data ?? {}));
        const chartData = computed(() => Object.values(props.data ?? {}));
        // Formatted chart dataset data
        const chartDataSets = computed<ChartData<'doughnut'>>(() => ({
            labels: labels.value,
            datasets: [
                {
                    label: props.label,
                    data: chartData.value,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 8
                }
            ]
        }));
        // ChartJS config
        const cfg = computed<ChartConfiguration<'doughnut'>>(() => ({
            type: 'doughnut',
            data: chartDataSets.value,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        fullSize: false
                    },
                    tooltip: {
                        enabled: true
                    },
                    title: props.label
                        ? {
                            display: true,
                            position: 'top',
                            align: 'center',
                            color: 'rgba(0, 0, 0, 0.8)',
                            text: props.label,
                            font: {
                                style: 'normal',
                                family: 'sans-serif',
                                size: 18,
                                weight: '500'
                            }
                        }
                        : undefined
                }
            }
        }));

        // Build new chart
        const init = () => {
            // Check for context
            if (!ctx.value) {
                currentState.value = State.NO_CANVAS_ERROR;
                return;
            }

            // Init. chart
            chartRender.value = new Chart(ctx.value, cfg.value);
        };

        // After mount set context and create chart
        onMounted(() => {
            // Check for context
            ctx.value = chart.value?.getContext('2d') ?? null;

            // Return if no context
            if (!chart.value || !ctx.value) {
                currentState.value = State.NO_CANVAS_ERROR;
                return;
            }

            // Return if no config
            if (!cfg.value) {
                currentState.value = State.NO_CONFIG_ERROR;
                return;
            }

            // Create chart
            init();
        });

        // On component destory, destroy chart instance
        onBeforeUnmount(() => chartRender.value?.destroy());

        // Rebuild chart on data updates
        watch(() => props.data, (value, previousValue) => {
            // Compare values
            if (objectsAreEqual(value, previousValue)) {
                return;
            }

            // Init chart if it doesn't exist
            if (!chartRender.value) {
                init();
                return;
            }

            // Update chart data if present
            chartRender.value.data = chartDataSets.value;
            chartRender.value.update();
        });

        // Setup component
        return {
            height,
            width,
            currentState,
            chart,
            chartRender,
            ctx,
            labels,
            chartData,
            chartDataSets,
            cfg
        };
    }
});
</script>
