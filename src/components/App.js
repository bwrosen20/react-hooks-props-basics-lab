import React, { useReducer } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

//renders all properties

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city}/>
      <About bio={user.bio} linkedin={user.links.linkedin} github={user.links.github}/>

    </div>
  );
}

export default App;


