
var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  // 1. New variable penguins
  let penguins = [gunter, ramon, fred];

  // 2. Access first penguin
  console.log(penguins[0]);

  // 3. SecondPenguin variable
  let secondPenguin = penguins[1];

  // 4. Access second penguin
  console.log(secondPenguin.name);

  // 5. myPenguin object
  let myPenguin = {
    character: ["Captain Cook, Greta, other penguins", "Whiteblack", "Roy and Silo","Penguins", "Tacky the Penguin", "Onk Beakman", "Misha", "Eclair Ecleir Eicler"],

    origin: ["And Tango Makes Three", "Death and the Penguin, Penguin Lost", "Mr. Popper's Penguins", "Overlord (novel series)", "Penguin Island", "Skylanders: Mask of Power books", "Tacky the Penguin[1]", "Whiteblack the Penguin Sees the World"],

    author: ["Peter Parnell and Justin Richardson", "Andrey Kurkov", "Richard and Florence Atwater", "Kugane Maruyama", "Anatole France", "Cavan Scott", "Helen Lester", "H. A. Rey and Margret Rey"],

    notes: ["They are slightly anthropomorphized, slightly fictionalized chinstrap penguins.", "A cheeky penguin who gets in over his head in mafia affairs and political intrigue.", 
    "Children's book about a housepainter who ends up with a flock of penguins.",
    "Also appears in anime series based on light novel.",
    "Satirical version of French history",
    "",
    "A penguin who does things differently than other penguins.",
    "Children's book about a travelling penguin"]
}

// Push to penguin array
penguins.push(myPenguin);

// 6. Length of penguins array
console.log(penguins.length);

// 7. Change first penguins canFly's value
penguins[0].canFly = true;

// 8. Invoke sayHello function of first penguin
penguins[0].sayHello();

// 9. Iterate through every penguin
for ( let penguin in penguins) {
	console.log(penguins[penguin].name);
}

// 10. Iterate and invoke sayHello methods of penguins
for ( let penguin in penguins) {
	console.log(penguins[penguin].sayHello());
}

// 11. Iterate penguins and add numberOfFeet property with value 2
for ( let penguin in penguins) {
	penguins[penguin].numberOfFeet = 2;
}

// 12 Iterate penguins and check if they can fly. If can fly than print a message
for ( let penguin in penguins) {
	if (penguins[penguin].canFly) {
        console.log(`${penguins[penguin].name} can fly!`);
    }
}