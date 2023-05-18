import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/icons/icons.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Store from "./redux_featurs/Storage/Store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
