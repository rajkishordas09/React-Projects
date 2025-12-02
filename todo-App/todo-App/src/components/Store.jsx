import { createContext } from "react";

export const StoreContextElement = createContext(
  { todoItems: [], handleClick() {}, onHandleDelete() {} } //bydefault value
); //take value from app.jsx
