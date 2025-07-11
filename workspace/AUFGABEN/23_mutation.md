# Daten schreiben mit TanStack Query

# Dateien

- src/main.tsx
- src/components/PlantForm.tsx

# Aufgabe

- Speicher die Daten aus dem Formular mit einer Mutation aus der "TanStack Query" Bibliothek

# Schritte

1. Erzeuge in `PlantForm` mit `useMutation` eine neue Mutation zum Speichern der Formulardaten
    - Die Logik zum Speichern für die `mutationFn` hast du im vorherigen Schritt schon gebaut, du kannst sie in die
      `mutationFn` schieben
    - Achte darauf, dass du die zurückgegeben `Plant` aus der `mutationFn` mit `return` zurücklieferst
    - Führe die Mutation aus, wenn auf den Speichern-Button gedrückt wird (`handleSave`)
2. Gib Feedback aus
    - Wenn das Speichern erfolgreich war, zeige eine entsprechende Meldung unter dem Formular an (Du kannst die CSS-Klasse
      `success-message` verwenden)
    - Wenn das Speicherh nicht geklappt hat, zeige eine Fehlermeldung an (CSS-Klasse `error-message`)
        - Du kannst einen Fehler im Server simulieren, in dem du einen Pflanzennamen nur in Großbuchstaben eingibst
    - Kannst du den "Pflanze hinzufügen"-Button auf `disabled` setzen, während die Mutation ausgeführt wird?
        - Du kannst die Mutation künstlich verlangsamen, in dem du `?slow=2000` an die URL hängst
3. Wenn die Daten gespeichert wurden, wird die Pflanzen-Liste nicht neu aktualisiert
    - Das liegt darin, das der Cache nicht nach der Mutation aktualisiert wird
    - Kannst du mit der `onSuccess`-Eigenschaft von
      `useMutation` die Liste im Cache anhand ihres Query Keys invalidieren?

# Material

- TanStack Query Bibliothek: https://tanstack.com/query/latest/docs/framework/react/overview
- Mutations mit TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/mutations
- `useMutation` (https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation)
    - insb. `mutate`, `reset`, `isError`, `isSuccess`, `isPending`
- Queries nach einer Mutation invalidieren: https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations
- QueryClient: https://tanstack.com/query/latest/docs/reference/QueryClient#queryclientinvalidatequeries
- useQueryClient: https://tanstack.com/query/latest/docs/framework/react/reference/useQueryClient
