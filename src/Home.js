import React from "react";
import styled from "styled-components";



const Home =()=>{
    return (<Wrapper className="test">Feels good to be home</Wrapper>);
}



const Wrapper = styled.section`
  height: 40vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home