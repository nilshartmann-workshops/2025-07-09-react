# Daten vom Server lesen und schreiben

# Dateien

- src/components/App.tsx
- src/components/PlantForm.tsx

# Aufgabe

* Lese die Pflanzen-Daten vom Server
* Speicher die Pflanzen-Daten aus dem Formular auf dem Server

# Vorbereitung

- Bitte stelle sicher, dass dein Backend-Prozess läuft!
- Dazu im `backend`-Verzeichnis dieses Repositories das npm-Script `start` ausführen
    - `npm run backend`
- Der Server läuft auf http://localhost:7200
- Du kannst prüfen, ob er läuft, in dem Du http://localhost:7200/api/plants im Browser öffnest
    - Dann sollte eine Liste von JSON-Objekten zurückgeliefert werden

# Schritte

*Wir machen hier im ersten Schritt das Laden und Speichern sehr einfach. Eine bessere Integration kommt im zweiten
Schritt*

1. Füge in deiner `App`-Komponente einen State hinzu, der ein Array von `Plant`-Objekten hält
2. Render in `App` einen Button zum Lesen der Daten
    - Wenn auf den Button geklickt wird, lade mit fetch oder ky die Pflanzen vom Server
        - Endpunkt: "GET http://localhost:7200/api/plants"
    - Verwende `zod` um die gelesenen Daten zu validieren (Liste von `Plant`-Objekten)
    - Wenn die Daten gültig sind, setze sie in den State
    - Verwende deine `PlantCardList`-Komponente, um die gelesenen Pflanzen anzuzeigen
3. Speicher die Daten aus dem `PlantForm` auf dem Server
    - Die `handleSave`-Funktion gibt es dort bereits
    - Die Daten des Formulars kannst du 1:1 so auf den Server speichern
    - Verwende dazu den Endpunkt "http://localhost:7200/api/plants" mit einem POST Request
        - Der Body sind die Daten aus dem Formular
        - Wenn du ky verwendest, kannst du die Eigenschaft `json` setzen
        - Wenn du fetch verwendest, musst du `body` verwenden und das Objekt selbst in einen String verwandeln (
          `JSON.stringify()`)
            - Außerdem musst dann selbst den HTTP Header `content-type` auf `application/json` setzen
        - Lies das Ergebnis vom Server und zeige es auf der Konsole an
        - Du kannst das Ergebnis auch mit zod validieren lassen. Der Server schickt das neue Pflanzen-Objekt zurück.
            - Feedback für den Benutzer bauen wir im nächsten Schritt

# Material

- ky library for data fetching: https://github.com/sindresorhus/ky
- `fetch` API im Browser:
    - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    - Beispiele: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- `parse` von zod zum Validieren von Objekten: https://zod.dev/basics?id=parsing-data
- JavaScript promises:
    - "async" functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
    - "await" keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
    - Promise objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    - 
