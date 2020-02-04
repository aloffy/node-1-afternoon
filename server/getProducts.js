const products = require('../products.json')

const getProducts = (req, res) => {
  if (req.query.price) {
    const filteredPrice = products.filter(product => product.price >= +req.query.price)
    res.status(200).send(filteredPrice)
  }
  else {
    res.status(204).send(products)
  }

  // const productId = products.find(product => product.id === +req.params.id)
  
  // if (productId) {
  //   res.status(200).send(productId)
  // } else {
  //   res.status(404).send('Item not in list')
  // }
}

module.exports = getProducts