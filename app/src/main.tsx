import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import MaxWidthWrapper from "./components/max-width-wrapper.tsx";
import "@/styles/global.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MaxWidthWrapper className="py-32">
        <App />
      </MaxWidthWrapper>
    </QueryClientProvider>
  </StrictMode>,
);
