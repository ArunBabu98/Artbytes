import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  height: 40vh;
  margin-top: 20px;
  background-color: #39b290;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Description = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const InputContainer = styled.div`
  margin-top: 50px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 300;
  border: none;
  color: lightgray;

  &:hover {
    box-shadow: 3px 3px 10px gray;
  }
`;

const Button = styled.button`
  margin-left: 20px;
  height: 40px;
  width: 100px;
  font-size: 18px;
  border-radius: 10px;
  border: 2px solid white;
  color: white;
  background-color: #39b290;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: white;
    color: #39b290;
    box-shadow: 3px 3px 10px gray;
  }
`;

const Right = styled.div``;

const CommunityTitle = styled.h1``;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #309c7d;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>Stay in loop</Title>
        <Description>
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating OpenSea.
        </Description>
        <InputContainer>
          <Input placeholder="Your email address"></Input>
          <Button>Sign Up</Button>
        </InputContainer>
      </Left>
      <Right>
        <CommunityTitle>Join the community</CommunityTitle>
        <IconContainer>
          <Icon>
            <TwitterIcon />
          </Icon>
          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <RedditIcon />
          </Icon>
          <Icon>
            <YouTubeIcon />
          </Icon>
          <Icon>
            <EmailIcon />
          </Icon>
        </IconContainer>
      </Right>
    </Container>
  );
};

export default Footer;
