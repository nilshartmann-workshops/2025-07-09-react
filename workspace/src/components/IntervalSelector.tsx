import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";

type IntervalSelectorProps = {
  wateringInterval?: number;
  onWateringIntervalChange(newWateringInterval: number): void

  // onWateringIntervalChange2: (newWateringInterval: number) => void

}

//
// interface JavaIntervalSelectorProps  {
//   void onWateringIntervalChange(int newWateringInterval)
// }

export default function IntervalSelector(props: IntervalSelectorProps) {

  // console.log("Aktuelle Zeit", new Date().toISOString());

  // "State" (Zustand, "Model")
  // const state = useState(2);
  //    //  ^---- "Tuple"
  // const wateringInterval = state[0];
  // const setWateringInterval = state[1];


  // TODO: Countdown

  // setWateringInterval(wateringInterval + 1)

  const error = props.wateringInterval !== undefined && props.wateringInterval < 1 ? "Bitte Zahl größergleich 1 eingeben" : "";

  function handleChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    props.onWateringIntervalChange(parseInt(event.target.value))
  }

  // "Virtueller" DOM
  //   element: div
  //     children:
  //       element: label
  //         children: Gießinterval

  return <div>
    <label>Gießinterval</label>
    <input type={"number"} value={props.wateringInterval === undefined ? "": props.wateringInterval}
      // onChange={ handleChangeEvent }
      onChange={event => props.onWateringIntervalChange(parseInt(event.target.value))}
    />
    <p>Sie müssen die Pflanze alle {props.wateringInterval} Tage gießen</p>
    <div>{error}</div>
    <button
      onClick={ () => props.onWateringIntervalChange(14) }
      className={"btn-primary"}>Alle 2 Wochen gießen</button>
  </div>

}