import React , { useState } from 'react';
import styled from "styled-components";

const InputBox = styled.input`
margin-left: 4%;`;

function SetTitle(props){
    function sendData(event){
        props.setInput(event.target.value);
    }

return <>
    <InputBox
    onChange={sendData} 
    placeholder=">제목을 입력하세요."/>
      </>
}

export default SetTitle;