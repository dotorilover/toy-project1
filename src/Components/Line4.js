import React from "react";
import styled from "styled-components";


const TextShadow = styled.button`
 margin-left: 0.7vw;
`;

const TextReversal = styled.button`

`;

const TitleSmall = styled.button`

`;

const Line4Text = styled.text`
font-size:small;
margin-left: 2vw;
`

function Line4(){
    return <div>
        <Line4Text>텍스트 스타일 변경</Line4Text>
        <TextShadow>텍스트 그림자</TextShadow>
        <TextReversal>텍스트 색상 반전</TextReversal>
        <TitleSmall>제목 크기 작게</TitleSmall>
    </div>
}

export default Line4;