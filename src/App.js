import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filters/Filter";
import './styles/App.css'
import { useTheme } from "./components/Utils/Theme";





function App() {
  const {theme,setTheme} = useTheme()
  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Filter />
    </div>
  );
}

export default App;
