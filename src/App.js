//import logo from './logo.svg';
import "./App.css";
import CountryList from "./Components/CountryList";

import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div className="App">
      <div className={theme}>
        <Header onThemeChange={handleThemeChange} />
        <CountryList />
      </div>
    </div>
  );
}

export default App;
