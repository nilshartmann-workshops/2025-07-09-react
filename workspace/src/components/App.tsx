// const aloeVeraPlant = {
//   name: "Aloe Vera",
//   location: "Wohnzimmer",
//   wateringInterval: 7,
//   lastWatered: "2025-06-30",
// };

import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";

// liste.map( function(aktuellenWert) { return aktuellenWert.toUpperCase()  } )
// liste.map( aktuellenWert => aktuellenWert.toUpperCase() )

const allPlants: Plant[] = [
  {
    id: "1",
    name: "Aloe Vera",
    location: "Schlafzimmer",
    wateringInterval: 12,
    lastWatered: "2025-06-16",
  },
  {
    id: "2",
    name: "Orchidee",
    location: "Wohnzimmer",
    wateringInterval: 20,
  },
];


export default function App() {
  return (
    <div className={"AppContainer"}>
      <IntervalSelector />
      {/*<PlantCardList plants={allPlants} />*/}
      {/*<PlantCard name={aloeVeraPlant.name}*/}
      {/*           location={aloeVeraPlant.location} */}
      {/*           wateringInterval={aloeVeraPlant.wateringInterval} */}
      {/*/>*/}
      {/*<PlantCard {...aloeVeraPlant} />*/}
      {/*<PlantCard*/}
      {/*  name={"Aloe Vera"}*/}
      {/*  location={"Wohnzimmer"}*/}
      {/*  wateringInterval={7}*/}
      {/*  lastWatered={"2025-06-30"}*/}
      {/*/>*/}
      {/*<PlantCard name={"Tulpe"}*/}
      {/*           location={"Bad"}*/}
      {/*           wateringInterval={1} />*/}
    </div>
  );
}
