import React , { useState } from 'react';
import styled from "styled-components";

const InputBox = styled.input`
margin-left: -0.5%;`;

function UnderTitle(props){
    function sendData(event){
        props.setInput(event.target.value);
    }

return <>
    <InputBox  type="text"
    onChange={sendData} 
    placeholder=">분류를 입력하세요."/>
      </>
}

export default UnderTitle;