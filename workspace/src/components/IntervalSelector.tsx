import { useState } from "react";

export default function IntervalSelector() {

  console.log("Aktuelle Zeit", new Date().toISOString());

  // "State" (Zustand, "Model")
  // const state = useState(2);
  //    //  ^---- "Tuple"
  // const wateringInterval = state[0];
  // const setWateringInterval = state[1];

  const [ wateringInterval, setWateringInterval ] = useState(7);

  // TODO: Countdown

  // setWateringInterval(wateringInterval + 1)

  const error = wateringInterval < 1 ? "Bitte Zahl größergleich 1 eingeben" : "";

  // "Virtueller" DOM
  //   element: div
  //     children:
  //       element: label
  //         children: Gießinterval

  return <div>
    <label>Gießinterval</label>
    <input type={"number"} value={wateringInterval}
      onChange={ event => setWateringInterval(parseInt(event.target.value)) }
    />
    <p>Sie müssen die Pflanze alle {wateringInterval} Tage gießen</p>
    <div>{error}</div>
    <button
      onClick={ () => setWateringInterval(14) }
      className={"btn-primary"}>Alle 2 Wochen gießen</button>
  </div>

}