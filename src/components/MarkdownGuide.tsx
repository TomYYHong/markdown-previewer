import styled from "styled-components";

const Title = styled.h1`
  margin: 0px;
`;
const GuideContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MarkdownGuide = styled.div`
  background-color: rgb(27, 30, 31);
  border-color: rgb(58, 62, 65);
  padding: 20px;
  margin: 10px;
  border: 1px solid rgb(221, 221, 221);
  color: white;
`;

const markdownGuide: React.FC = () => {
  return <GuideContainer>
    <MarkdownGuide>
    <Title>Markdown Cheat Sheet</Title>
    <ul>
      <li>
      <code># H1</code>
      </li>
      <li>
      <code>## H2</code>
      </li>
      <li>
      <code>### H3</code>
      </li>
      <li>
      <code>**bold**</code>
      </li>
      <li>
      <code>*italic*</code>
      </li>
      <li>
      <code>[Link](http://a.com)</code>
      </li>
      <li>
      <code>![Image](http://url/a.png)</code>
      </li>
      <li>
      <code>`inline code`</code>
      </li>
      <li>
      <code>``block code```</code>`
      </li>
      <li>
      <code>- list item</code>
      </li>

    </ul>
    </MarkdownGuide>
 </GuideContainer>;
};

export default markdownGuide;
