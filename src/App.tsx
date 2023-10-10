import React, { useState } from 'react'
import './App.css'
import Markdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const innerTextOutput = document.getElementById("output");

  const changeOutput = () => {
    setShowGuide(!showGuide);
    console.log(showGuide);
    console.log("markdown: "+markdown);
    console.log(<Markdown>{markdown}</Markdown>);
    innerTextOutput?.innerHTML =<Markdown>{markdown}</Markdown>;
  }



  return (
    <>
      <div>
        <h1> The markdown reviewer</h1>
      </div>
      {/* setOutput(event.target.value) */}
      <div className="mark-input">
        <textarea className="input" onChange={(event) => setMarkdown(event.target.value)}> </textarea>
        <button onClick={()=> changeOutput()}>Markdown input</button>
      </div>

      <div className="mark-output">
        <textarea className="output" value="output" id="output"> </textarea>
      </div>
    </>
  )
}

export default App
