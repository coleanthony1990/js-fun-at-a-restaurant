function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3)
    deliveryOrders.push(newOrder)
    return deliveryOrders
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNumber)
    {
      return deliveryOrders.splice(i, 1)
    }
}
}
function listItems(deliveryOrders) {
  var items = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item)
  }
  return items.join(', ')
}

function searchOrder(deliveryOrders, name) {
  var order = false
  for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].item === name) {
    order = true
  }
}
  return order
}






module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
