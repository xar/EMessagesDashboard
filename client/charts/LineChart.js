import { Line } from 'vue-chartjs'

export default Line.extend({
  props: ['labels', 'values', 'label', 'backgroundColor'],
  mounted () {
    console.log()
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.label,
          backgroundColor: this.backgroundColor,
          data: this.values
        }
      ],
    }, {
      maintainAspectRatio:false
    })
  }
})
