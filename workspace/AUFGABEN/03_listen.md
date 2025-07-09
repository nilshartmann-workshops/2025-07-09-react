# Listen rendern

# Dateien

- src/components/App.tsx
- src/components/PlantCardList.tsx (anlegen!)
- src/types.ts (anlegen!)

# Aufgabe

- Baue eine neue Komponente, die eine Liste von `PlantCard´-Komponenten darstellen kann

# Schritte

1. Lege die Datei
   `src/types.ts` an undefiniere darin einen fachlichen TypeScript Typen für Pflanzen in unserer Anwendung
    - Diesen Typen werden später auch an anderen Stellen verwenden
    - Es ist übliche Praxis, fachliche Typen in eine oder mehrere eigene Dateien zu legen
    - Definiere und exportiere den TypeScript-Typen `Plant`
        - Dieser soll dieselben Properties wie schon in unserer `PlantCard` bekommen, aber zusätzlich noch ein
          `id`-Feld:
            - `id` (String)
            - `name` (String)
            - `location` (String)
            - `wateringInterval` (Zahl)
            - `lastWatered` (String, optional)
2. Lege die Datei `PlantCardList.tsx` und darin die neue Komponente `PlantCardList` an
    - Die Komponente soll eine Liste (Array) des `Plant`-Typs als Property entgegennehmen
    - Die Komponente soll ein `div` (CSS-Klasse: `PlantCardList`) zurückliefern
    - Innerhalb des `div`-Elements sollen die übergebenen Pflanzen jeweils mit der
      `PlantCard`-Komponente gerendert werden
        - Verwende dazu die `map`-Funktion von JavaScript
        - Denk an das `key`-Property von React!
3. Stell die `App`-Komponente um
    - Erzeuge dort eine Liste (Array)  von `Plant`-Objekten mit Beispiel-Daten
    - Render statt der einzelnen `PlantCard`-Komponenten dort nun die `PlantCardList`-Komponente
    - Öffne die Browser-Console und stelle sicher, dass dort keine Fehler oder Warnungen ausgegeben werden.

# Material

- Rendering Lists in React: https://react.dev/learn/rendering-lists
    - `key` property: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
- JavaScript
  `map` function on an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- TypeScript `Arrays`: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

