import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FoodStore from "./store/FoodStore";
import UserStore from "./store/UserStore";

export const Context = createContext(null);
if (
  !new (class {
    x;
  })().hasOwnProperty("x")
)
  throw new Error("Transpiler is not configured correctly");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        food: new FoodStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
