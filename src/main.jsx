import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/red-hat-text";
import OrderContextProvider from "./store/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrderContextProvider>
      <App />
    </OrderContextProvider>
  </StrictMode>
);
