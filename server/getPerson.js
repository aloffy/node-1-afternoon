const people = require('../MOCK_DATA.json')

const getPerson = (req, res) => {
  console.log(people.name)
}

module.exports = getPerson