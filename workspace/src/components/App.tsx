// const aloeVeraPlant = {
//   name: "Aloe Vera",
//   location: "Wohnzimmer",
//   wateringInterval: 7,
//   lastWatered: "2025-06-30",
// };

import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { useState } from "react";

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

// type VisibilityState = {
//   intervalSelectorVisible: boolean,
//   navBarVisible: boolean
// }

export default function App() {

  const [isVisible, setIsVisible] = useState(true);
  // const [isNavBarVisible, setIsNavVisible] = useState(true);
  // const [isX, setX] = useState<VisibilityState>({
  //   intervalSelectorVisible: true,
  //   navBarVisible: false
  // });
  //
  // function handleNavBarOpen() {
  //   isX.navBarVisible = true
  //   setX({
  //     intervalSelectorVisible: false,
  //     navBarVisible: true
  //   })
  // }

  const [count, setCount] = useState(1);
  const [ wateringInterval, setWateringInterval ] = useState<number|undefined>();

  return (
    <div className={"AppContainer"}>
      <button onClick={() => setCount(count+1)}>Increase Counter {count}</button>
      {isVisible ? <IntervalSelector
        wateringInterval={wateringInterval}
        onWateringIntervalChange={setWateringInterval}
      /> : <p>Kein IntervalSelector :-(</p> }
      <button onClick={() => setIsVisible(!isVisible)}>
        Ein/Ausblenden
      </button>

      <PlantCardList plants={allPlants} />
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
