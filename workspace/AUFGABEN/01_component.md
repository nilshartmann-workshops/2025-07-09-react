# Übung: Eine React-Komponente

# Vorbereitung

- Stelle Sie sicher, dass der Vite Development Server läuft.
- Um den Server zu starten, kannst du das `dev`-Script aus der
  `package.json`-Datei im Root-Verzeichnis des Repositories ausführen:
    - `npm run dev`
- Der Server läuft dann auf Port 3000 laufen.
- **Hinweis:** Wenn der Server läuft und du **Dateien speicherst
  **, sollte die Anzeige im Browser automatisch aktualisiert werden.
    - Falls das nicht funktioniert, lade die Seite im Browser neu
    - Normalerweise musst du den Server nicht neu starten.

# Dateien

- src/components/App.tsx
- src/components/PlantCard.tsx (diese Datei bitte erstellen!)

# Aufgabe

- Baue deine erste React-Komponente: die Basis-Version unserer `PlantCard`-Komponente

# Schritte

1. Erstelle die neue Datei `src/components/PlantCard.tsx`.
    - Dateien mit TypeScript- und JSX-Code **müssen** mit `.tsx` enden.
    - Dateien mit reinem TypeScript-Code (ohne JSX) können auch die Endung `.ts` haben.
2. Implementiere die `PlantCard`-Komponente.
    - Um es einfach zu halten, starten wir mit Folgendem:
        - Ein `div`-Element als Wurzel, das die CSS-Klasse `PlantCard` hat und zwei Kinder enthält:
            1. `header` mit Pflanzenname (`h2`) und Standort (`div`)
            2. `section` mit Gießinterval und Datum der letzten Wässerung (jeweils `div`)
    - Styling usw. steht in diesem Workshop nicht im Fokus, aber wenn du magst, kannst du eigenes CSS hinzufügen (siehe unten).
    - Vergiss nicht, die Komponente zu exportieren
3. **Binde die Komponente in die `App`-Komponente ein.**
    - Die
      `App`-Komponente ist die Wurzelkomponente unserer Anwendung, die gerendert wird, wenn unsere Anwendung startet.
    - Diese Komponente dient uns jetzt erstmal als "Spielwiese" zum ausprobieren unserer Komponenten. Später ersetzen wir sie durch Anwendungskomponenten.
    - Die `App`-Komponente gibt derzeit `Hello World` aus. Entferne die `h1`-Komponente und rendern stattdessen deine
      `PlantCard`.

# Material

- React Komponenten: https://react.dev/learn/your-first-component
- CSS-Klassennamen in React: https://react.dev/learn#adding-styles
- Importieren und Exportieren von Komponenten: https://react.dev/learn/importing-and-exporting-components
    - Hinweis: In unserer Umgebung musst du die Dateierweiterung beim Import nicht angeben!
    - z.B. `import PlantCard from "./components/PlantCard`

# Hintergrund: CSS in React

- Tailwind ist im Arbeitsbereich installiert und kann sofort verwendet werden.
    - Wenn du kein Tailwind verwenden willst, kannst du alles in `src/index.css` löschen.
        - Dann kannst du darin eigene CSS-Klassen schreiben.
        - Alternativ kannst du dein eigenes CSS in einzelne Dateien aufteilen. Erstelle hierfür eine oder mehrere
          `.css`-Dateien und importiere diese in eine oder mehrere Komponenten, z. B. `import './PlantCard.css';`.
- Egal, ob du Tailwind oder eigenes CSS verwendest: Anstelle von `class` musst du in React das Attribut
  `className` verwenden, um CSS-Klassen festzulegen (https://react.dev/learn#adding-styles).
- Um Inline-Styles (`style`-Property) zu verwenden, musst du in React ein Objekt übergeben.
    - Siehe hier: https://react.dev/learn/javascript-in-jsx-with-curly-braces#using-double-curlies-css-and-other-objects-in-jsx