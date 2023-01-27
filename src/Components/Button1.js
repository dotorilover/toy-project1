import React from "react";
import styled from "styled-components";

const ResetButton = styled.button`
    
    margin-left: 28%;
    margin-top: 6%;
    border-radius: 5px;
`;

function Button1(){
    return <ResetButton>초기화</ResetButton>
}

export default Button1;