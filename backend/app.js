'use strict'
const express = require('express')
const app = express()
const _ = require('lodash')
const axios = require('axios')

app.use('/', express.static(__dirname + '/../dist'))
app.get('/pocet-aktivovanych-schranok', (req, res) => {
  let totalActivations = 0
  let resultsFilteredLabels = []
  let resultsFilteredValues = []

  axios.get('https://metais.finance.gov.sk/monitoring/param-value/list?entityRef=baafb479-407a-43bb-891d-b21571eb1491&parameterTypeId=18&intervalStart=2016-04-01&intervalEnd=2016-09-07&sortAttr=intervalStart&sortAsc=true&perPageSize=100000').then((response) => {
    const results = response.data.results

    results.forEach((val, key) => {
      totalActivations = parseInt(totalActivations) + parseInt(val.value)

      resultsFilteredLabels.push(val.monitoredInterval.start)
      resultsFilteredValues.push(parseInt(val.value))
    })

    return res.send({
      data: {
        results: results,
        resultsFilteredLabels: resultsFilteredLabels,
        resultsFilteredValues: resultsFilteredValues,
        stats: {
          totalActivations: totalActivations
        }
      }
    })
  })
})

app.get('/pocet-prijatych-sprav', (req, res) => {
  let totalActivations = 0
  let resultsFilteredLabels = []
  let resultsFilteredValues = []

  axios.get('https://metais.finance.gov.sk/monitoring/param-value/list?entityRef=07de6dfa-955e-4b1d-80b5-6c220191ba49&parameterTypeId=18&intervalStart=2016-04-01&intervalEnd=2016-09-07&sortAttr=intervalStart&sortAsc=true&perPageSize=100000').then((response) => {
    const results = response.data.results

    results.forEach((val, key) => {
      totalActivations = parseInt(totalActivations) + parseInt(val.value)

      resultsFilteredLabels.push(val.monitoredInterval.start)
      resultsFilteredValues.push(parseInt(val.value))
    })

    return res.send({
      data: {
        results: results,
        resultsFilteredLabels: resultsFilteredLabels,
        resultsFilteredValues: resultsFilteredValues,
        stats: {
          totalActivations: totalActivations
        }
      }
    })
  })
})

const server = app.listen(3000, () => {
  console.log('Express server listening on port ' + server.address().port)
})
