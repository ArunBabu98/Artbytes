import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 9vh;

`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Left = styled.div``;

const Right = styled.div``;

export const Front = () => {
  return (
    <Container>
      <Wrapper>
        <Left>left</Left>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};
