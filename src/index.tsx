import { Provider } from "react-redux";
import { store } from "./state";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
