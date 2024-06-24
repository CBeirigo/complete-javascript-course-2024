// const country = "Brasil";
// const continent = "América do Sul";
// let populationBrazil = 215300000;
// const isIsland = false;
// const language = "Português";

// Basic Operator

// const halfPopulation = populationBrazil / 2;
// populationBrazil++;
// const populationFinland = 6000000;
// const comparisionPopulation = populationBrazil > populationFinland;
// const averagePopulation = 33000000;
// const averagePopulationComparision = populationBrazil < averagePopulation;
// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   populationBrazil +
//   "million people speak" +
//   language;

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland)
// console.log(halfPopulation);
// console.log(comparisionPopulation);
// console.log(description);

// Strings and Template Literals

// const description2 = `${country} is in ${continent}, and its ${populationBrazil} million people speak ${language}`

// console.log(description2)

// Equality Operators: == vs. ===

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("no borders");
}
