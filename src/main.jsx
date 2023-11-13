import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "./Components/Pokemon/AppLayout";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import SearchPage from "./Pages/SearchPage";
import GlobalStyle from "./globalStyles";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/:gen",
        element: <HomePage />,
      },
      {
        path: "/pokemon/:name",
        element: <DetailPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <AppLayout>
          <HomePage />
        </AppLayout>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
