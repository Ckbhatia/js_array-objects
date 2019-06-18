// Empty Penguin
let penguin = {};

// Add favoriteFoods key and values to penguin object
penguin.favoriteFoods = ['fish', 'squid', 'krill'];

// Prints favoriteFoods 2nd value
console.log(penguin.favoriteFoods[1]);

// Add firstFavFood variable and assigned to favoriteFoods's first value
let firstFavFood = penguin.favoriteFoods[0];

// Add another food
penguin.favoriteFoods.push('crustaceans');

// Print favoriteFoods length to console
penguin.favoriteFoods.length;

// Reassign last item in the list to "pineapples"
penguin.favoriteFoods[3] = "pineapples";

// Assign last food to lastFavFood variable
let lastFavFood = penguin.favoriteFoods[penguin.favoriteFoods.length - 1];

// Iterate and print every food of penguin
for (let food of penguin.favoriteFoods) {
    console.log(food);
}