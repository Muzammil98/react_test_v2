import React from "react";
import "./App.css";
// Components
import SearchInput from "./components/Input";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <SearchInput />
      <List items={["placeholder"]} />
    </div>
  );
}

export default App;
