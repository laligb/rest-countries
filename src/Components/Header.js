import React from "react";

export default function Header({ onThemeChange, theme }) {
  return (
    <div className="header">
      <h1>Where is the world?</h1>
      <button className="modes" onClick={onThemeChange}>
        ☾ Dark Mode
      </button>
    </div>
  );
}
