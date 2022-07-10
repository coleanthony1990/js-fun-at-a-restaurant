function createRestaurant(name) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
  var rest = {
    name: name,
    menus: menus
  }
  return rest
}


function addMenuItem(restaurants, newItem) {

  if (newItem.type === "lunch" && !restaurants.menus.lunch.includes(newItem)) {
    restaurants.menus.lunch.push(newItem)
  } else if (newItem.type === "breakfast" && !restaurants.menus.breakfast.includes(newItem)) {
    restaurants.menus.breakfast.push(newItem)
  } else if (newItem.type === "dinner" && !restaurants.menus.dinner.includes(newItem)) {
    restaurants.menus.dinner.push(newItem)
  }
}



function removeMenuItem(pizzaRestaurant, item, type) {
  //console.log(pizzaRestaurant.menus)
  var itemType = pizzaRestaurant.menus[type]
  for (var i = 0; i < itemType.length; i++) {
    if (itemType[i].name === item) {
      itemType.splice(i, 1)
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }

  }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }






module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
