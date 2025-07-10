# "Kontrollierte" Komponenten

# Dateien

- src/components/App.tsx
- src/components/IntervalSelector.tsx

# Aufgabe

- Mach' aus dem `IntervalSelector` eine _kontrollierte_ (controlled) Komponente

# Schritte

1. Erzeuge einen TypeScript-Type für die Properties von `IntervalSelector`
    - Als Props brauchst du:
      1. eine Callback-Funktion, die vom `IntervalSelector` aufgerufen wird, wenn darin der Wert geändert wird
      2. den aktuellen Wert, der vom `IntervalSelector` angezeigt werden soll
2. Entferne den State aus der Komponente und verschiebe ihn in die `App`-Komponente
    - Pass' dort den Aufruf der `IntervalSelector`-Komponente an
3. Erweitere die Schnittstelle der `IntervalSelector`-Komponente
    - Der übergebene `interval` soll auch `undefined` sein dürfen (damit man das Eingabefeld nicht zwingend mit einem Wert vorbelegen muss)
    - Du kannst an ein `input`-Element als `value` leider _kein_ `undefined` übergeben. Wenn dein Wert auf `undefined` steht, musst du einen Leerstring übergeben.
    - Verwende die `IntervalSelector`-Komponente in der `App`-Komponente und gib `undefined` als `interval` an
      - Öffne die Browser Konsole
      - Gib einen numerischen Wert in das Eingabefeld ein
      - Es sollte keine Fehler auf der Konsole zu sehen sein.

# Material

* TypeScript
    * Funktionssignaturen beschreiben: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
    * `null` and `undefined`: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
* React
    * explizite Typ-Angaben für `useState`: https://react.dev/learn/typescript#typing-usestate
    * State zwischen Komponenten teilen: https://react.dev/learn/sharing-state-between-components
    * "Controlled and uncontrolled components": https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components


