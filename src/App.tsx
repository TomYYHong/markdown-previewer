import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./App.css";
import RactMarkdown from "react-markdown";
import HeaderHandler from "./components/Header";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
    console.log(markdown);
  };

  const changeOutput = (event: MouseEvent<HTMLButtonElement>) => {
    setShowGuide(!showGuide);
    console.log(showGuide);
  };

  const onToggleGuide = () => {
    // Define the logic to execute when the button is clicked
    console.log("Guide toggled.");
  };

  return (
    <>
      <div>
        <HeaderHandler onToggleGuide={onToggleGuide} />
      </div>
      {/* setOutput(event.target.value) */}
      <div className="container">
        <div className="mark-input">
          <textarea
            className="inputTextArea"
            value={markdown}
            onChange={handleChange}
            placeholder="Enter your Markdown here..."
          ></textarea>
        </div>

        <div className="mark-output">
          <RactMarkdown>{markdown}</RactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
