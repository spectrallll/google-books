import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/store-provider";
import App from "@/app";


const container = document.getElementById("root");

if (!container) {
  throw new Error("can't find root container");
}

const root = createRoot(container);
root.render(
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
)