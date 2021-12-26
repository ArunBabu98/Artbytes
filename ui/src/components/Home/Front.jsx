import React from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import pic from '../../images/pic.webp'

const Container = styled.div`
  margin-top: 9vh;
  height: 80vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8)), url("${props=>props.image}");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
`;

const Left = styled.div`
  height: 100%;
  flex: 1;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

const MainTextContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 100px;
  padding-top: 100px;
  flex-direction: column;
`;

const FirstText = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;
const SecondText = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: gray;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const ExploreButton = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  font-weight: 700;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  background-color: #39b290;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: white;
    color: #39b290;
    box-shadow: 3px 3px 3px gray;
  }
`;

const CreateButton = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  border-radius: 10px;
  border: 2px solid #39b290;
  background-color: white;
  color: #39b290;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #39b290;
    color: white;
    box-shadow: 3px 3px 3px gray;
  }
`;

const LearnMoreContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 100px;
  padding-top: 100px;
`;
const LearnIcon = styled.div`
  display: flex;
  background-color: #39b290;
  border-radius: 50%;
  color: white;
  transform: scale(0.8);
`;
const LearnText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #39b290;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  margin-left: 80px;
  margin-top: 50px;
  box-shadow: 3px 3px 7px gray;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: 10px 10px 14px gray;
  }
`;

const PictureContainer = styled.div`
  height: 80%;
  background-color: red;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const DescContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PropicContainer = styled.div`
  margin: 0px 20px;
  width:50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #39B290;
`;

const Propic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #39B290;
`;

const InfoIncon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: gray;
`;

export const Front = () => {
  return (
    <Container image={pic}>
      <Wrapper>
        <Left>
          <MainTextContainer>
            <FirstText>
              Discover, collect, and sell extraordinary NFTs
            </FirstText>
            <SecondText>
              ArtBytes is the world's first and largest NFT marketplace
            </SecondText>
            <ButtonContainer>
              <ExploreButton>Explore</ExploreButton>
              <CreateButton>Create</CreateButton>
            </ButtonContainer>
          </MainTextContainer>
          <LearnMoreContainer>
            <LearnIcon>
              <PlayArrowIcon />
            </LearnIcon>
            <LearnText>Learn more about ArtBytes</LearnText>
          </LearnMoreContainer>
        </Left>
        <Right>
          <CardContainer>
            <PictureContainer>
              <Picture src={pic} />
            </PictureContainer>
            <DescContainer>
              <LeftSide>
                <PropicContainer>
                  <Propic src="assets/propic.jpeg"/>
                </PropicContainer>
                <Description>
                  <DescTitle>Portrait of a dream</DescTitle>
                  <Username>@john_x</Username>
                </Description>
              </LeftSide>
              <InfoIncon>
                <InfoOutlinedIcon/>
              </InfoIncon>
            </DescContainer>
          </CardContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};
