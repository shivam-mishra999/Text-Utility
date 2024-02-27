import React, {useState} from 'react';

import "./TextForm.css";





export default function TextForm(props) {
    const [text, setText] = useState("");
    
   

    const handleUpperCase = ()=>{
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("changed to upperCase", "success !");
    }

    const handleLowerCase = ()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("changed to lowerCase", "success !");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleClear = ()=>{
        setText('');
        props.showAlert("Textbox Cleared", "success !");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard", "success !");

    }

    const wordCount = text.trim() === ''? 0 : text.split(/\s+/).length;

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'yellow':'white', color: props.mode==='dark'?'black':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="functionButton mx-2" onClick={handleUpperCase}>Convert To Uppercase</button>
        <button className="functionButton mx-2" onClick={handleLowerCase}>Convert To Lowercase</button>
        
        <button className= "functionButton mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="functionButton mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your Text Summary</h4>
        <p>{wordCount} words</p>
        <p>{text.length} characters</p>
        <p>{0.008 * wordCount} minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
