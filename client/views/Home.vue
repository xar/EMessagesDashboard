<template>
<div>
  <div class="page">
    <div class="grid">
      <div class="cell -12of12">
        <table>
          <thead>
            <tr>
              <th>Aktivácia elektronickej schránky na doručovanie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div v-if="allDataFetched">
                  <line-chart background-color="#f87979" label="Aktivácia elektronickej schránky na doručovanie" :labels="ActivationsOfMailboxLabels" :values="ActivationsOfMailboxValues":height="500"></line-chart>
                </div>
              </td>
            </tr>
          </tbody>
          </table>
      </div>
    </div>
  </div>

  <div class="page">
    <div class="grid">
      <div class="cell -12of12">
        <table>
          <thead>
            <tr>
              <th>Prijatie správy s elektronickým dokumentom alebo elektronickým dokumentom podpísaným elektronickým podpisom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div v-if="allDataFetched">
                  <line-chart background-color="#fff" label="Prijatie správy s elektronickým dokumentom alebo elektronickým dokumentom podpísaným elektronickým podpisom" :labels="NumberOfEMessagesLabels" :values="NumberOfEMessagesValues" :height="500"></line-chart>
                </div>
              </td>
            </tr>
          </tbody>
          </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LineChart from 'root/charts/LineChart.js'
import axios from 'axios'
export default {
  components: {
    LineChart
  },

  data () {
    return {
      allDataFetched: false,
      ActivationsOfMailboxLabels: [],
      ActivationsOfMailboxValues: [],
      NumberOfEMessagesValues: [],
      NumberOfEMessagesLabels: [],
    }
  },

  mounted () {
    axios.get('/pocet-aktivovanych-schranok').then((results) => {
      this.ActivationsOfMailboxValues = results.data.data.resultsFilteredValues
      this.ActivationsOfMailboxLabels = results.data.data.resultsFilteredLabels
    })

    axios.get('/pocet-prijatych-sprav').then((results) => {
      this.NumberOfEMessagesValues = results.data.data.resultsFilteredValues
      this.NumberOfEMessagesLabels = results.data.data.resultsFilteredLabels
      this.allDataFetched = true
    })
  }
}
</script>
