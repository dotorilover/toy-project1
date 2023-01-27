import React from "react";
import styled from "styled-components";

const MainImageBlock = styled.div`
width: 75%;
height: 40vh;

background: pink;
margin: auto;
margin-top: 10%;
`;
// const TitleBlock = styled.div`
// background: white;
// height: 10vh;
// width: 75%;

// margin: auto;
// margin-top: 10%;
// `


function MainImage({children}){
    return <MainImageBlock>{children}</MainImageBlock>;
}

export default  MainImage;