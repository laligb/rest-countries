import React, { useState } from "react";
import ReactSwitch from "react-switch";

function Toggle({ onThemeChange }) {
  const [mode, setMode] = useState(false);

  const handleChange = () => {
    setMode(!mode);
    onThemeChange(!mode ? "dark" : "light");
  };
  return <ReactSwitch checked={mode} onChange={handleChange} />;
}

export default Toggle;
