import React from "react";
import styled from "styled-components";

const RandomGradi = styled.button`
 margin-left: 0.9vw;
`;

const RandomOneCol = styled.button`

`;

const ImageURI = styled.button`

`;

const Line2Text = styled.text`
font-size:small;
margin-left: 2vw;
`

function Line2(){
    return <div>
        <Line2Text>배경을 정해주세요</Line2Text>
        <RandomGradi>랜덤 그라디언트</RandomGradi>
        <RandomOneCol>랜덤 단색</RandomOneCol>
        <ImageURI>이미지 URI</ImageURI>
    </div>
}

export default Line2;