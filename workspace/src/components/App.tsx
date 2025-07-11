// const aloeVeraPlant = {
//   name: "Aloe Vera",
//   location: "Wohnzimmer",
//   wateringInterval: 7,
//   lastWatered: "2025-06-30",
// };

import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import IntervalSelector from "./IntervalSelector.tsx";
import { use, useState } from "react";
import PlantForm from "./PlantForm.tsx";
import ky from "ky";

// liste.map( function(aktuellenWert) { return aktuellenWert.toUpperCase()  } )
// liste.map( aktuellenWert => aktuellenWert.toUpperCase() )

// const allPlants: Plant[] = [
//   {
//     id: "1",
//     name: "Aloe Vera",
//     location: "Schlafzimmer",
//     wateringInterval: 12,
//     lastWatered: "2025-06-16",
//   },
//   {
//     id: "2",
//     name: "Orchidee",
//     location: "Wohnzimmer",
//     wateringInterval: 20,
//   },
// ];

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

  const [allPlants, setAllPlants] = useState<Plant[]>([])

  // async / await
  async function loadPlants() {
    // // CompletableFuture
    // const promise = ky.get("http://localhost:7200/api/plants").json();
    // promise.then( (data) => {
    //   const plantsFromServer = PlantSchema.array().parse(data);
    //   setAllPlants(plantsFromServer);
    // });

    const data = await ky
      .get("http://localhost:7200/api/plants?slow=1200")
      .json();
    const plantsFromServer = PlantSchema.array().parse(data);
    setAllPlants(plantsFromServer);
  }

  // NICHT!!!!!!!!!!! VERBOTEN!!!!!!!!!!!::::::::::: 👮 👮 👮 👮 👮
  // loadPlants();

  return (
    <div className={"AppContainer"}>
      <PlantForm />
      <button onClick={ ()  => loadPlants()}>Laden</button>
      <PlantCardList plants={allPlants} />

      <button onClick={() => setCount(count+1)}>Increase Counter {count}</button>
      {/*{isVisible ? <IntervalSelector*/}
      {/*  wateringInterval={wateringInterval}*/}
      {/*  onWateringIntervalChange={setWateringInterval}*/}
      {/*/> : <p>Kein IntervalSelector :-(</p> }*/}
      {/*<button onClick={() => setIsVisible(!isVisible)}>*/}
      {/*  Ein/Ausblenden*/}
      {/*</button>*/}


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
