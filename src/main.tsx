import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./vendor/reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename={"/test-eco-alfa"}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
