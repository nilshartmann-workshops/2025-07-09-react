import { Plant } from "../types.ts";
import PlantCard from "./PlantCard.tsx";

type PlantCardListProps = {
  plants: Plant[]
  // oder:
  // plants: Array<Plant>
}

export default function PlantCardList(props: PlantCardListProps) {
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