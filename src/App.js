import React from 'react';
import styled from 'styled-components'
import Button from './components/Button';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const BlueH1 = styled.h1`
  color: ;
`;

function App() {
  return (
    <WrapperDiv>
      <BlueH1>Styled Components Playground</BlueH1>
      <Button type='primary'>Primary</Button>
      <Button type='success'>Success</Button>
      <Button type='goats'>Primary</Button>
      <Button type='laser'>Primary</Button>
    </WrapperDiv>
  );
}

export default App;
