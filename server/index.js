
const express = require('express')
var cors = require('cors')

const app = express()
const port = 8080

const widgets = [
  'BarChart'
]

const data = [
  {
    category: "Alcohol",
    budget_status: 0.0,
    over_budget: 0.0,
    total_budget: 180,
  },
  {
    category: "Clothing",
    budget_status: 0.0,
    over_budget: 0.0,
    total_budget: 200,
  },
  {
    category: "Dining",
    budget_status: 0.82,
    over_budget: 0.0,
    total_budget: 300,
  },
  {
    category: "Entertainment",
    budget_status: 0.02,
    over_budget: 0.0,
    total_budget: 210,
  },
  {
    category: "Fast Food",
    budget_status: 0.6,
    over_budget: 0.0,
    total_budget: 80,
  },
  {
    category: "Gas",
    budget_status: 0.24,
    over_budget: 0.0,
    total_budget: 320,
  },
  {
    category: "Groceries",
    budget_status: 1.0,
    over_budget: 0.26,
    total_budget: 850,
  }
]

app.use(cors())

app.get('/spendings', (req, res) => res.send(JSON.stringify(data)))
app.get('/widgets', (req, res) => res.send(JSON.stringify(widgets)))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
