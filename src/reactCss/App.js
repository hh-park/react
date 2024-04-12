import styled, { css } from 'styled-components';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import './App.css';

const Container = styled.div`
  display: flex;
  background-color: black;
`;

const Button = styled.button`
  backgorund: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </>
  );
}

export default App;
