import { Plant } from "../types.ts";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = Readonly<{
  plants: Plant[]
  // oder:
  // plants: Array<Plant>
}>

export default function PlantCardList(props: PlantCardListProps) {
  // props.plants = []
  // props.plants.push({ /* ... */});
  return <div className={"PlantCardList"}>
    {/*{props.plants.map(plant => <PlantCard key={plant.id} {...plant} />)}*/}
    {props.plants.map(plant => <PlantCard
      key={plant.id}
      name={plant.name}
      location={plant.location}
      wateringInterval={plant.wateringInterval}
      lastWatered={plant.lastWatered}
    />)}
  </div>
}