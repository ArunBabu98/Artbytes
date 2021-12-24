import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 9vh;
  height: 90vh;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 10px;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

const FirstText = styled.h1`
  /* font-size: 50px;
  font-weight: 500; */
`;
const SecondText = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const ExploreButton = styled.div``;
const CreateButton = styled.div``;
const LearnMoreContainer = styled.div`
  display: flex;
`;
const LearnIcon = styled.div``;
const LearnText = styled.div``;


const Right = styled.div``;

export const Front = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MainTextContainer>
            <FirstText>Discover, collect, and sell extraordinary NFTs</FirstText>
            <SecondText>ArtBytes is the world's first and largest NFT marketplace</SecondText>
            <ButtonContainer>
              <ExploreButton>explore</ExploreButton>
              <CreateButton>create</CreateButton>
            </ButtonContainer>
          </MainTextContainer>
          <LearnMoreContainer>
            <LearnIcon>icon</LearnIcon>
            <LearnText>Learn more about ArtBytes</LearnText>
          </LearnMoreContainer>
        </Left>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};
