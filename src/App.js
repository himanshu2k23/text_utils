import './App.css';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import React, { useState } from 'react';
function App() {
  const [theme, setTheme] = useState("light");
  const [alert,setAlert]= useState(null);
  const changeTheme = () => {
    let newtheme = theme === "light" ? "dark" : "light";
    let bgcolor= theme === "light" ? "#262729" : "white"
    document.body.style.backgroundColor= bgcolor
    setTheme(newtheme);
  }
  return (
    <>
      <div>
        <Navbar title="Text Utils" theme={theme} changeTheme={changeTheme} />
        <Alert/>
        <div className={`container my-3 text-${theme === "light" ? "dark" : "light"} `}>
          <TextArea heading="Enter your text here" theme={theme}/>
        </div>
      </div>
    </>
  );
}

export default App;
