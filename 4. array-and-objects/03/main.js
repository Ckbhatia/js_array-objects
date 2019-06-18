// Add penguin object here for reference
let penguin = {
    favoriteFoods: ['fish', 'squid', 'krill'],
};

// 1. Add outfit to pengiun
penguin.outfit = {
      hat: 'baseball cap',
      shirt: 'Hawaiian shirt',
      pants: 'cargo shorts',
      shoes: 'flip-flops'
}

// 2. Add hat to penguin's outfit
let penguinHatType = penguin.outfit.hat;


// 3. // Add watch to penguin's outfit
penguin.outfit.watch = "pocket watch";

// 4. Change hat to "top hat"
penguin.outfit.hat = "top hat";

// 5. // Delete penguin's pants
delete penguin.outfit.pants;

// 6. Iterate through cloths of penguin
for (let cloth in penguin.outfit) {
    console.log(cloth);
}