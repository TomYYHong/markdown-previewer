import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 90%;
  height: 200px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 0px;
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
  return (
    <HeaderContainer>
      <Title> The markdown reviewer</Title>
      <Button onClick={onToggleGuide}>Cheat Sheet </Button>
    </HeaderContainer>
  );
};

export default Header;
