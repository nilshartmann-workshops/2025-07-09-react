// Type Inference
let person: string | null = "Klaus";

// Type Alias
type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number;
  // optional:
  lastWatered?: string;
};

interface PlantCardProps2 {
  name: string;
  location: string;
  wateringInterval: number;
  // optional:
  lastWatered?: string;
}

const aloeVeraPlant: PlantCardProps2 = {
  name: "Aloe Vera",
  location: "Wohnzimmer",
  wateringInterval: 7,
  lastWatered: "2025-06-30",
};

// const name = aloeVeraPlant.name;
// const location =aloeVeraPlant.location;
//
// // Destructuring Operator
// const { name, location } = aloeVeraPlant;



function PlantCard(props: PlantCardProps) {
  // ...
}

PlantCard(aloeVeraPlant);

// String person = "Klaus";

// Java:
//  var person = "Klaus";
//  var listeVonPersonen = getPersonen();

// person = 7;
//
person = null;
person = "Susi";
//
// person = function() {}
//
// person = true;

// Coercing
//

let a = "";

if (!a) {
  // ...
}

// let b = "";
//
// if (a == b) {
//   //
// }

// if (a !== b) {
//   //
// }

person.toUpperCase();
