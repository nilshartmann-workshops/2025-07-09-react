import "./index.css";
import "./setup-dayjs.ts";

import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";

import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "./create-query-client.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={createQueryClient()}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
