function nameMenuItem(item1) {
  return `Delicious ${item1}`
}

function createMenuItem(name, price, type) {
  var item = {
    name: name,
    price: price,
    type: type
  }
  return item;
}

function addIngredients(topping, ingredients) {
  
  if (!ingredients.includes(topping)) {
    ingredients.push(topping);
    return ingredients
  }
}
function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(oldPrice) {
  return oldPrice *= 1 - 0.10
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
