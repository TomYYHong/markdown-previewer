import { ChangeEvent, useState } from "react";
import "./App.css";
import HeaderHandler from "./components/Header";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import MarkdownGuide from "./components/MarkdownGuide";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
    console.log(markdown);
  };


  const onToggleGuide = () => {

    // Define the logic to execute when the button is clicked
    
    console.log("Guide toggled.");
    setShowGuide(!showGuide)
  };

  return (
    <>
      <div>
        <HeaderHandler onToggleGuide={onToggleGuide} />
        {showGuide === true ? <MarkdownGuide /> : null}
      </div>
      <div className="container">
        <MarkdownInput onChange={handleChange} value={markdown} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </>
  );
}

export default App;
