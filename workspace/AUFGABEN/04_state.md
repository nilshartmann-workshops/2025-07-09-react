# State (Zustand) von Komponenten

# Dateien

- src/components/App.tsx
- src/components/IntervalSelector.tsx (anlegen!)

# Aufgabe

- Baue eine neue Komponente, mit der man ein Interval (z.B. von Tagen) auswählen kann

# Schritte

1. Lege die neue Komponente `IntervalSlider` in der Datei `src/components/IntervalSlider.tsx` an
2. Erzeuge einen `state` in der Komponente (vom TypeScript Type `number`), der initial auf `1` gesetzt ist
3. Render ein `input`-Field zur Nummerneingabe (`type="number"`) und verknüpfe es mit dem State
    - Achtung! Der Wert (`value`) im `onChange`-Ereignis ist immer ein
      `string`. Du musst den Wert also vor dem Setzen in den State in eine `number` konvertieren
    - Zeige ein Label an (z.B. "Interval" oder "Gießinterval")
4. Render den `IntervalSlider` in der `App`-Komponente
    - Die bisherigen Komponenten kannst du auskommentieren
    - Wir stecken das später alles "richtig" zusammen, jetzt ist die `App`-Komponente erstmal nur Spielwiese zum testen
5. Optimiere den `IntervalSlider`, z.B.:
    - Zeig den gewählten Interval an ("Alle X Tage gießen")
    - Füge Buttons hinzu, mit denen man bestimmte Intervalle per Klick setzen kann (z.B. "täglich", "wöchentlich")
6. **Optional**: Kannst du in der `App`-Komponente einen `button` einfügen, mit dem Du den `IntervalSlider` ein- und ausblenden kannst?
    - Du brauchst auch dafür einen State...
    - was passiert mit dem Wert, der im `IntervalSlider` ausgewählt wurde, wenn du die Komponente ein- bzw. wieder ausblendest mit deinem Button?

# Material

- JavaScript:
    - Konvertieren eines Strings per Number constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
        - oder per `parseInt`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    - Arrow-Funktionen: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    - Arrow-Funktionen (aus meinen Workshop-Slides zu dem Thema): https://nilshartmann-workshops.github.io/2025-06-13-js-ts-intro/js-grundlagen.html#/arrow-functions

* React
    * React State: https://react.dev/learn/state-a-components-memory
        * insbesondere: https://react.dev/learn/state-a-components-memory#adding-a-state-variable
    * useState: https://react.dev/reference/react/useState
    * Event Handler: https://react.dev/learn/responding-to-events#adding-event-handlers
    * Properties von HTML Elementen (built-in browser components): https://react.dev/reference/react-dom/components/common
    * Type für das ChangeEvent: `ChangeEvent<HTMLInputElement>`
      * `const handleEvent = (e: ChangeEvent<HTMLInputElement) => { /* ... */ }`

