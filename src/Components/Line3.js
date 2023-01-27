import React from "react";
import styled from "styled-components";


const TitleSubTitleGroup = styled.button`
 margin-left: 1.7vw;
`;

const TitleGroup = styled.button`

`;

const OnlyTitle = styled.button`

`;

const Line3Text = styled.text`
font-size:small;
margin-left: 2vw;
`

function Line3(){
    return <div>
        <Line3Text>썸네일 구성 요소</Line3Text>
        <TitleSubTitleGroup>제목/부제목/분류</TitleSubTitleGroup>
        <TitleGroup>제목/분류</TitleGroup>
        <OnlyTitle>제목만</OnlyTitle>
    </div>
}

export default Line3;