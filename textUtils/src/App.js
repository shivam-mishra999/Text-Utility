import React, {useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar.js";
import TextForm from './components/TextForm.js';
// import About from './components/About.js';
import Alert from './components/Alert.js';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const handleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#080c31';
      showAlert("Dark Mode has been Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
    }
  }




  return (
    <>
    <Navbar title="Word-Counter" mode={mode} handleMode={handleMode}  />
    <Alert alert={alert}/>
    
    {/* <About /> */}

    <div className="container my-3">
    <TextForm heading="Enter the Text to analyze below:-" mode={mode} showAlert={showAlert} />
    </div>
    </>
  
  );
}

export default App;
