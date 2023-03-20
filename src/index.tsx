import { createRoot } from "react-dom/client";


const container = document.getElementById("root");

if (!container) {
  throw new Error("can't find root container");
}

const root = createRoot(container);
root.render(
    <div>Hello</div>
)