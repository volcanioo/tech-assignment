<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins // Its helping to update to charts every data change

export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: {
        // Creating props
        chartData: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)  // It's helping to render of the first load.
    },
    watch: {
        chartData () {
            this.$data._chart.update()  // Its helping to update to charts every data change
        }
    }
};
</script>
