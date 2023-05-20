import React, { useState } from 'react'

export default function TextArea(props) {

    const [text, setText] = useState("")
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUppercaseClick = () => {
        setText(text.toUpperCase())
    }
    const handleLowercaseClick = () => {
        setText(text.toLowerCase())
    }
    const clearTextarea = () => {
        setText("")
    }
    const countWords=(text)=>{
        let trimmedText=text.trim();
        return text? trimmedText.split(" ").length : 0
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.theme==="dark" ? "#c5c8c9" : "white"}} value={text} onChange={handleOnChange} id="floatingTextarea2" rows="8"></textarea>
            </div>
            <div className="d-flex">
                <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={clearTextarea}>Clear</button>
            </div>
            <div className="container my-3">
                <p>{countWords(text)} words and {text.length} characters</p>
                <h3>Preview:</h3>
                <p>{text? text : "Write something above to see the preview"}</p>
            </div>
        </>
    )
}
