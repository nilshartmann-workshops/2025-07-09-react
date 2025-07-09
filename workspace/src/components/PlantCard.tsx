
// React Properties (XML Attribute) ("props")

// AUFRUF:
// <PlantCard
//   name={"Aloe Vera"}
//   location={"Wohnzimmer"}
//   wateringInterval={7}
//   lastWatered={"2025-06-30"}
// />

// PROPS-OBEJKT FÜR UNSERE KOMPONENTE:
// const props = {
//   name:"Aloe Vera",
//   location:"Wohnzimmer",
//   wateringInterval:7,
//   lastWatered:"2025-06-30",
// }



type PlantCardProps = {
  name: string;
  location: string;
  wateringInterval: number;
  // optional:
  lastWatered?: string;
};



export default function PlantCard(props: PlantCardProps) {

  // const lastWatered = props.lastWatered === undefined ?  "heute" : props.lastWatered;
  // const lastWatered = props.lastWatered ?? "heute" ;

// export default function PlantCard({ name, location, lastWatered = "Heute" } : PlantCardProps) {
  // MVC
  // Model  -> Beans oder PoJos
  // View   -> freemarker, JSP
  // Controller -> @Controller, @RequestMapping

  // JSX
  //  React.createElement("div")


  const wateringInfo =
    props.wateringInterval === 1
      ? "Jeden Tag gießen"
      : `Alle ${props.wateringInterval} Tage gießen`;

  return (
    <div className={"PlantCard"}>
      <header>
        <h2>{props.name}</h2>
        <div>📍 {props.location}</div>
      </header>
      <section>
        <div>{wateringInfo}</div>
        <div>
          {props.lastWatered === undefined
            ? `Noch nie gegossen!`
            : `Zuletzt gegossen am ${props.lastWatered}`
          }
        </div>
      </section>
    </div>
  );
}
