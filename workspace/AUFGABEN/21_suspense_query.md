# Daten lesen mit TanStack Query

# Dateien

- src/main.tsx
- src/components/App.tsx
- src/components/PlantCardListLoader.tsx

# Aufgabe

- Lies die Daten für die CardList mit TanStack Query 

# Schritte

1. Die Bibliothek TanStack Query setzt voraus, dass du einen `QueryClient` konfigurierst und mit dem
   `QueryClientProvider` der Anwendung bekannt machst
    - Füge dazu folgenden Code in `main.tsx` ein (ersetze den bestehenden `createRoot`-Aufruf):
        - ```tsx
          import { QueryClientProvider } from "@tanstack/react-query";
          import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
          import { createQueryClient } from "./create-query-client.tsx";
          // ...
        
          const queryClient = createQueryClient();

          // bestehenden createRoot-Aufruf durch diesen ersetzen:
          createRoot(document.getElementById("root")!).render(
            <QueryClientProvider client={queryClient}>
                <App />
                <ReactQueryDevtools />
            </QueryClientProvider>,
          );
          ```
    - Die `ReactQueryDevtools`-Komponente render ein kleines "Insel"-Symbol in der Anwendung
        - Wenn du darauf klickst, kannst du den Cache von TanStack Query inspizieren
        - Diese Komponten wird im Produktionsbuild automatisch entfernt
2. Lege eine neue Komponente `PlantCardListLoader` an
    - Diese Komponente dient "nur" dazu, den Query auszuführen und die `PlantCardList` zu rendern
        - Die
          `App`-Komponente werden wir später entfernen und durch den Router ersetzen, deswegen können wir die Daten nicht in
          `App` laden
        - 🤔 Was spricht dafür oder dagegen die Daten direkt in `PlantCardList` zu laden (und auf die
          `PlantCardListLoader`-Komponente zu verzichten?)
3. Lies darin die Daten mit `useSuspenseQuery` der TanStack Query Bibliothek
    - Die Logik zum Lesen haben wir im vorherigen Schritt schon in der `App`-Komponente gebaut
    - Du kannst sie in die `queryFn` für den Query in `PlantCardListLoader` verwenden
    - Achte auch hier darauf, dass die Daten, die der Server zurückliefert, mit zod validiert werden
    - Wenn die Daten geladen wurden, rendere damit die `PlantCardList`-Komponente
4. Entferne den Button und die Logik zum Laden der Daten aus der `App´-Komponente
    - Render stattdessen die `PlantCardListLoader`-Komponente

# Material

- TanStack Query Bibliothek: https://tanstack.com/query/latest/docs/framework/react/overview
    - Devtools: https://tanstack.com/query/latest/docs/framework/react/devtools
- Queries with TanStack Query: https://tanstack.com/query/latest/docs/framework/react/guides/queries
- Query Function `queryFn`: https://tanstack.com/query/latest/docs/framework/react/guides/query-functions
- Query Key `queryKey`: https://tanstack.com/query/latest/docs/framework/react/guides/query-keys
- `useSuspenseQuery`: https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQuery
