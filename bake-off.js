const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipe = '';
  
  for (let curr of recipes)
  {
    if (bakeryA.includes(curr.ingredients[0]))
    {
      if (bakeryB.includes(curr.ingredients[1]))
      {
        return curr.name;
      }
    }
    else if (bakeryB.includes(curr.ingredients[0]))
    {
      if (bakeryA.includes(curr.ingredients[1]))
      {
        return curr.name;
      }
    }
  }

  return recipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
