import PlantCard from "./PlantCard.tsx";


// const aloeVeraPlant = {
//   name: "Aloe Vera",
//   location: "Wohnzimmer",
//   wateringInterval: 7,
//   lastWatered: "2025-06-30",
// };

export default function App() {
  return (
    <div className={"AppContainer"}>
      {/*<PlantCard name={aloeVeraPlant.name}*/}
      {/*           location={aloeVeraPlant.location} */}
      {/*           wateringInterval={aloeVeraPlant.wateringInterval} */}
      {/*/>*/}
      {/*<PlantCard {...aloeVeraPlant} />*/}
      <PlantCard
        name={"Aloe Vera"}
        location={"Wohnzimmer"}
        wateringInterval={7}
        lastWatered={"2025-06-30"}
      />
      <PlantCard name={"Tulpe"}
                 location={"Bad"}
                 wateringInterval={1} />
    </div>
  );
}
