import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import Intro from "./components/intro/intro";
import Skillss from "./components/Skills/skills";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Intro />
      <Skillss />
    </div>
  );
}

export default App;
