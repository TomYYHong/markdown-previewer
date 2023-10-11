import styled from "styled-components";

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
`;

const Button = styled.button`
  background-color: rgb(4, 114, 145);
  color: rgb(203, 198, 192);
  border-color: initial;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  &:hover {
    padding: 10px;
    background-color: rgb(97, 218, 251);
    color: rgb(40, 44, 52);
    cursor: pointer;
    transition: background-color 0.2s ease 0s;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return <div></div>;
};

export default Header;
