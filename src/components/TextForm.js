import React, {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText =  "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success");
    }
    const handlePaste = async () => {
        let newText = await navigator.clipboard.readText();
        setText(newText);
        props.showAlert("Text pasted!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[\s+]/).join(" ");
        setText(newText);
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    
    // text = "new text here"; this is wrong way to change the state
    // setText = "new text";   this is correct way to change the state
  return (
    <>
    <div>
        <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#0f0b49' : '#ccc', color: props.mode === 'dark' ? 'white' : 'black', border: props.mode === 'dark' ? '1px solid #fff' : '1px solid #ccc'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-info ms-4" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger ms-4" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning ms-4" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary ms-4" onClick={handlePaste}>Paste Text</button>
        <button className="btn btn-success ms-4" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div>
      <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Text Summary</h1>
      <p style={{color: props.mode === 'dark' ? '#eee' : 'black'}}>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
      <p style={{color: props.mode === 'dark' ? '#eee' : 'black'}}>{0.008 * text.trim().split(/\s+/).length} minutes to read</p>
    </div>
    <h3 style={{color: props.mode === 'dark' ? '#ffffff' : 'black'}}>Preview</h3>
    <p style={{color: props.mode === 'dark' ? '#eee' : 'black'}}>{text.length>0?text: 'Type the something into text box to see preview it here...'}</p>
    </>
  )
}