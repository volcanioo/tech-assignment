<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            gradient: null,
            gradient2: null
        };
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    },
    watch: {
        chartData () {
            this.$data._chart.update()
        }
    }
};
</script>
