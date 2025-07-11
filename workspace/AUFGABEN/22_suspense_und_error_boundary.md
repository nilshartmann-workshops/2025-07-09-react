# Platzhalter und Fehlermeldungen

# Dateien

- src/components/App.tsx

# Aufgabe

- Zeige Feedback an, während der Query ausgeführt wird und eine Fehlermeldung, falls der Query nicht erfolgreich war

# Schritte

1. Füge ein "Suspense Boundary" um die `PlantCardListLoader`-Komponente
    - Als `fallback` reicht es, wenn du eine einfache Meldung ausgibst
    - Zum Testen des Fallbacks gibt es zwei Möglichkeiten:
        1. Du hängst an die Query URL hinten `?slow=2000` an. Dann wird der Query serverseitig künstlich verzögert (
           `2000` = Zeit in Millisekunden, du kannst auch eine andere Zahl verwenden)
        2. In den TanStack Query Devtools kannst du einen Cache-Eintrag anklicken und in den Details in der rechten Spalte dann "Trigger Loading" anklicken. Dann bleibt der Query solange im Loading-Zustand bis du auf "Restore Loading" klickst
2. Füge ein "Error Boundary" ein, um Fehler, die bei der Ausführung des Queries auftreten, zu behandeln
    - Du kannst die fertige `ErrorBoundary`-Komponente aus `react-error-boundary` verwenden
    - Zeige als `fallback` eine einfache Fehlermeldung an
    - Zum Simulieren eines Fehlers kannst du das Backend einfach beenden
    - ⚠️ Achtung: Sowohl `ky` als auch TanStack Query wiederholen fehlgeschlagene Request automatisch!
      - Wenn du möchtest, dass deine fehlgeschlagenen Queries wiederholt werden, solltest du das nur über TanStack Query machen
        - Falls du mit `ky` arbeitest, kannst du das Retry für ky mit der Option `{retry: 0}` ausschalten
          - Das geht per Query oder global
      - Wenn du möchtest, dass deine Queries gar nicht wiederholt werden im Fehlerfall, kannst du das Retry auch in TanStack Query ausschalten
        - Setze dazu die Query-Option `retry` auf `false` in `useSuspenseQuery`
        - Alternativ globbal im `QueryClient`

# Material

- React Suspense Komponente: https://react.dev/reference/react/Suspense
- Suspense mit TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/suspense
- React: Fehler abfangen mit Error Boundaries: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
    - (Hinweis: Du musst keine eigene Error-Boundary-Klasse implementieren, wir nutzen die Bibliothek react-error-boundary.)
- React Error Boundary Bibliothek: https://github.com/bvaughn/react-error-boundary
    - Das `fallback`-Property: https://github.com/bvaughn/react-error-boundary?tab=readme-ov-file#errorboundary-with-fallback-prop
- ky: Ausschalten von Retry: https://github.com/sindresorhus/ky
- Query Retries in TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/query-retries