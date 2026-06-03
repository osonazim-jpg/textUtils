import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Toggle from './components/Toggle';
import Alert from './components/Alert';
import React, {useState} from 'react';
import Warning from './components/Warning';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const [warning, setWarning] = useState(null);

  const showWarning = (message, type) => {
    setWarning({
      mesg: message,
      tpe: type,
    })
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
  }
  const timer = setTimeout(() => {
    setAlert(null);
  }, 5000);

  // const modeText = () => {
  //   if(mode === 'light'){
  //     return 'Enable dark mode';
  //   } else {
  //     return 'Enable light mode';
  //   }
  // }

  const [modeText, setModeText] = useState('Enable dark mode');



  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      showWarning('This is a warning alert', 'warning');
      document.title = 'TextUtils - Light Mode';
      setModeText('Enable dark mode');
    } 
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#000b2f';
      showAlert('Dark mode has been enabled', 'success');
      showWarning('This is a warning alert', 'success');
      document.title = 'TextUtils - Dark Mode';
      setModeText('Enable light mode');
      setInterval(() => {
        document.title = 'TextUtils is amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now';
      }, 1500);
    }
  }

  return (
    <>
    {/* <Warning warning={warning}/> */}
    {/* <Toggle/> */}
    
    <Navbar title="TextUtils" aboutMenu="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About heading="About Us"/> */}
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
