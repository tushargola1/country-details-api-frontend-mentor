// App.jsx
import React from 'react';
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <ThemeProvider>
      <div className={`container ${isDarkMode ? 'darkBackground' : 'backgroundColor'}`}>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
