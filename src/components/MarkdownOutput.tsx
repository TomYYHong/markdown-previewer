import RactMarkdown from "react-markdown";
import styled from "styled-components";

const OutputContainer = styled.div`
    width: 50%;
    height: calc(100vh - 58.5px);
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    border-left: 1px solid rgb(221, 221, 221);
    border-left-color: rgb(58, 62, 65);
    background-color: rgb(27, 30, 31);
    color: whitesmoke;
`;


interface MarkdownOutputProps {
    markdown: string
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({markdown}) => {
  return (
    <OutputContainer>
       <RactMarkdown>{markdown}</RactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
