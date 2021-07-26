<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Line,
  props: ['labelConsumption', 'labelProduction'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: this.labelConsumption,
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }, {
        label: this.labelProduction,
        backgroundColor: '#38ff79',
        data: [8, 4, 2.4, 7.8, 2, 8, 7.8, 16, 8, 4, 2.4, 2.2]
      }]
    })
  }
})
</script>