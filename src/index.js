import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StudentsList } from "./styled.js";
export const StudentContext = createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentContext.Provider value="Students">
      <App />
      <StudentsList />
    </StudentContext.Provider>
  </React.StrictMode>
);
