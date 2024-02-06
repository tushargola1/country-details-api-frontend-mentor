import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import SearchNav from "./components/SearchNav";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
 const searchValue = (e) =>{
  {
  setSearchTerm(e)
  }
 }
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <SearchNav searchValue = {searchValue}/>
   
      </ThemeProvider>
    </>
  );
}

export default App;
