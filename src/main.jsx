import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./providers/Authprovider.jsx";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </QueryClientProvider>
  </StrictMode>
);
