import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "../counter";
import Teams from "../Teams";
import Users from "../Users";
import Friends from "../Friends";

function App() {
  return (
    <>
      <h3>React Core Concept Part-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Teams></Teams>
    </>
  );
}

export default App;
