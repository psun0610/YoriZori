import App from "./App";
import "./styles/index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { createRoot } from "react-dom/client";

serviceWorkerRegistration.register();

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
