import React from "react";
import styled from "styled-components";



const TemplateBlock = styled.div`
width: 50%;
height: 110vh;
background: white;

margin: auto;
margin-bottom: 10%;
`

function Template({children}){
    return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;