import React from "react";
import NavigationBar from "./components/navbar/NavigationBar";
import Intro from "./components/intro/intro";
import Skillss from "./components/Skills/skills";
import Experience from "./components/experience/experience";
import Contacts from "./components/contacts/socials/contacts";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Intro />
      <Skillss />
      <Experience />
      <Contacts />
    </div>
  );
}

export default App;
