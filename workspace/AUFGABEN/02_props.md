# Properties von Komponenten und dynamische Inhalte

# Dateien

- src/components/App.tsx
- src/components/PlantCard.tsx

# Aufgabe

- Unsere Komponente soll per Properties konfigurierbar sein
- Die Darstellung unterscheidet sich (leicht) je nach den übergebenen Werten

# Schritte

1. Definiere einen TypeScript-Type für die Properties ("props") deiner Komponente
    - Die Komponente soll folgende Properties entgegennehmen:
        - `name` (String)
        - `location` (String)
        - `wateringInterval` (Zahl)
        - `lastWatered` (String, optional)
2. Passe die Signatur der Funktion deiner `PlantCard`-Komponente an und nimm die Properties dort engegenen
    - Du kannst sie als `props`-Objekt verwenden oder mit Objekt Destrukturierung
3. Tausche die statischen Informationen in der Komponente durch die Werte in den Properties aus
4. Pass die Verwendung der Komponente in `App` an und übergib dort die Properties an deine `PlantCard`
5. Mache ein paar Experimente:
    - kannst du die Ausgabe, wie häufig gewässtert werden muss, so anpassen, dass sie die korrekte Mehrzahl anzeigt? ("Jeden Tag" bzw. "Alle X Tage")
    - kannst du eine Warnung o.ä. ausgeben, wenn die Wässerung überfällig ist?
        - Du findest in `components/date-utils.ts` die Funktion
          `getDaysUntilWatering` mit der du ausrechnen kannst, wann die nächste Wässerung erfolgen muss bzw. wie lange sie schon überfällig ist
          (Datumsformat für `lastWatered` muss sein: `YYYY-MM-DD`, z.B. `2025-06-28`). Um eine "rote" Meldung auszugeben, könnt ihr die CSS Klasse `error-message` setzen
    - zum ausprobieren kannst du in `App` mehrere
      `PlantCard`-Komponenten mit unterschiedlichen Properties rendern

# Material

- React
    - Component properties: https://react.dev/learn/passing-props-to-a-component
    - JavaScript in JSX: https://react.dev/learn/javascript-in-jsx-with-curly-braces
    - Conditionally rendering mit JSX: https://react.dev/learn/conditional-rendering#conditionally-including-jsx
    - Single Root Element: https://react.dev/learn/writing-markup-with-jsx#1-return-a-single-root-element
        - Fragment component: https://react.dev/reference/react/Fragment
- JavaScript / TypeScript
    - TypeScript object type (für das Properties-Objekt): https://www.typescriptlang.org/docs/handbook/2/objects.html
      - Alternativ kannst du auch ein `interface` von TypeScript verwenden: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
    - Destructuring Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
    - Destructuring von Objekten und Funktionsargumenten (meine Workshop-Slides zu dem Thema, mit Pfeiltaste Rechts kannst du navigieren): https://nilshartmann-workshops.github.io/2025-06-13-js-ts-intro/js-grundlagen.html#/js-destructuring
    - Template literals in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

