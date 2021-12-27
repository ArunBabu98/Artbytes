import React from "react";
import styled from "styled-components";
import Navbar from "../components/Home/Navbar";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IosShareIcon from "@mui/icons-material/IosShare";

const Container = styled.div`
  margin-top: 15vh;
`;

const ProfileContainer = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;
const Propic = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 10px 40px;
  background: url("https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg");
  background-size: cover;
  border: 2px solid #39b290;
`;
const DescContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const Name = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Username = styled.div`
  color: #39b290;
  font-weight: 600;
`;

const Verified = styled.div`
  color: #39b290;
  width: 20px;
  height: 20px;
  transform: scale(0.8);
`;

const Description = styled.div`
  font-weight: 400;
  margin-bottom: 10px;
`;

const ReadMoreContainer = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    color: #39b290;
  }
`;
const Readmore = styled.div`
  font-weight: 600;
`;
const ReadmoreIcon = styled.div``;

const StatsConatainer = styled.div`
  margin-left: 300px;
  display: flex;
  flex-direction: column;
`;

const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 2px solid lightgray;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px gray;
  }
`;
const Followers = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-right: 50px;
  color: #39b290;
`;
const FollowerStat = styled.div`
  font-weight: 700;
  color: gray;
`;
const FollowingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 2px solid lightgray;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px gray;
  }
`;

const Following = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-right: 50px;
  color: #39b290;
`;

const FollowingStat = styled.div`
  font-weight: 700;
  color: gray;
`;

const ForsaleContainer = styled.div`
  display: flex;
  align-items: center;
  color: #39b290;
  padding: 10px;
  border-bottom: 2px solid lightgray;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 3px gray;
  }
`;

const Forsale = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-right: 61px;
`;

const ForsaleStat = styled.div`
  font-weight: 700;
  color: gray;
`;

const SecondContainer = styled.div`
margin-top: 20px;
  width: 100%;
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  margin-left: 14%;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Icon = styled.div`
  height: 90%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #39b290;
  }
`;

const ButtonContainer = styled.div`
  margin-right: 10%;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: space-evenly;
`;

const ButtonIcon = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 100%;
  width: 35%;
  font-size: 18px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #39b290;
  cursor: pointer;

  &:hover{
      background-color: white;
      color: #39b290;
      box-shadow: 3px 3px 10px gray;
  }
`;

const Profile = () => {
  return (
    <Container>
      <Navbar />
      <ProfileContainer>
        <FirstContainer>
          <Propic></Propic>
          <DescContainer>
            <Name>Catye Best</Name>
            <UsernameContainer>
              <Username>@catye</Username>
              <Verified>
                <CheckCircleIcon />
              </Verified>
            </UsernameContainer>
            <Description>
              Catye Best is the digital persona of a russian NFT artist living
              and working in New York on multiple mediums and conceptual areas
              of expressions...
            </Description>
            <ReadMoreContainer>
              <Readmore>Readmore</Readmore>
              <ReadmoreIcon>
                <ArrowDropDownRoundedIcon />
              </ReadmoreIcon>
            </ReadMoreContainer>
          </DescContainer>
          <StatsConatainer>
            <FollowersContainer>
              <Followers>Followers</Followers>
              <FollowerStat>213</FollowerStat>
            </FollowersContainer>
            <FollowingContainer>
              <Following>Following</Following>
              <FollowingStat>112</FollowingStat>
            </FollowingContainer>
            <ForsaleContainer>
              <Forsale>For Sale</Forsale>
              <ForsaleStat>100</ForsaleStat>
            </ForsaleContainer>
          </StatsConatainer>
        </FirstContainer>
        <SecondContainer>
          <IconsContainer>
            <Icon>
              <TwitterIcon />
            </Icon>
            <Icon>
              <InstagramIcon />
            </Icon>
            <Icon>
              <EmailIcon />
            </Icon>
            <Icon>
              <AccountBalanceWalletOutlinedIcon />
            </Icon>
          </IconsContainer>
          <ButtonContainer>
            <ButtonIcon>
              <MoreVertIcon />
            </ButtonIcon>
            <ButtonIcon>
              <IosShareIcon />
            </ButtonIcon>
            <Button>Follow</Button>
          </ButtonContainer>
        </SecondContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
