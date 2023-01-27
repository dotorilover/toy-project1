import React , { useState } from 'react';
import styled from "styled-components";

const InputBox = styled.input`
margin-left: -0.5%;`;


function SubTitle(props){
    function sendData(event){
        props.setInput(event.target.value);
    }

return <>
    <InputBox  type="text"
    onChange={sendData} 
    placeholder=">부제목을 입력하세요."/>
      </>
}

export default SubTitle;