import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import Template from './Components/Template';
import  MainImage from './Components/MainImage'
import SetTitle from './Components/Line1/SetTitle';
import SubTitle from "./Components/Line1/SubTitle";
import UnderTitle from "./Components/Line1/UnderTitle";
import Line2 from './Components/Line2';
import Line3 from './Components/Line3';
import Line4 from './Components/Line4';
import Button1 from './Components/Button1';
import Button2 from './Components/Button2';



const GlobalStyle = createGlobalStyle`
body {
  background-color: #e9ecef;
  overflow-y:scroll;
}
input {
  border-radius: 8px;
  border:1px solid gray; 
  
  width: 14vw;
  height: 3vh;

  margin-top: 4vh;
  margin-right: 1vw;
}
button {
  width: 11vw;
  height: 3.8vh;
  border-radius: 8px;
  border:1px solid gray; 

  margin-top: 2.5vh;
  margin-right: 1vw;
}

span1 {
  width: 100%;
  height: 30%;
  padding-top: 12vh;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 1;
  font-size:xx-large;
}

span2 {
  width: 100%;
  height: 1vh;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 1;
  
}

`
const Line0Text = styled.text`

font-size:xx-large;
position: relative;
    top: 25px;
margin-left: 4%;
`;


function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  return (
    <>
    <GlobalStyle/>
    <Template> <Line0Text># Thumbnail Maker</Line0Text>
    <MainImage><span1>{input1}</span1> <span2>{input2}</span2>{input3}</MainImage>
    <SetTitle setInput={setInput1}/>
    <SubTitle setInput={setInput2}/>
    <UnderTitle setInput={setInput3}/>
    <Line2/>
    <Line3/>
    <Line4/>
    <Button1/><Button2/>
    </Template>
    </>
  );
}

export default App;
