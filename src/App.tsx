import React from 'react';
import './App.css';
import styled from 'styled-components';
import desert from './desert.png';
import { StyledTitle } from './components/Title.styled';
import { StyledDescription} from './components/Description.styled';
import { StyledBtn } from './components/Button.styled';
import { myTheme } from './styles/Theme.styled';

function App() {
  return (
    <div className="App">
      <StyledCard>
        <img src={desert} alt="Desert" width="280" height="170" />
        <StyledWrapper>
          <StyledTitle>Headline</StyledTitle>
          <StyledDescription>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledDescription>
          <StyledBtn btnType = "primary" color = {myTheme.colors.main} backgroundColor = {myTheme.colors.button}>See more</StyledBtn>
          <StyledBtn btnType = "outlined" color = {myTheme.colors.button}>Save</StyledBtn>
        </StyledWrapper>
      </StyledCard>
    </div>
  );
}

export default App;

const StyledCard = styled.div`
  padding: 10px 10px 22px;
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${myTheme.colors.main};
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
`
const StyledWrapper = styled.div`
    padding: 20px 10px;
`
