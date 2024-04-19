import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "@picocss/pico";
import "./styles/index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createRouter({ routeTree });

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
