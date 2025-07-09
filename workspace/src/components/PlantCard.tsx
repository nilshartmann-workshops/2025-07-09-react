export default function PlantCard() {
  // MVC
  // Model  -> Beans oder PoJos
  // View   -> freemarker, JSP
  // Controller -> @Controller, @RequestMapping

  // JSX
  //  React.createElement("div")

  return (
    <div className="PlantCard">
      <header>
        <h2>Aloe Vera</h2>
        <div>Schlafzimmer</div>
      </header>
      <section>
        <div>Alle fünf Tage gießen</div>
        <div>Zuletzt gegossen am 08. Juli 2025</div>
      </section>
    </div>
  );
}
