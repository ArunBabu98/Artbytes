import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Home/Navbar';

const Container = styled.div`
    margin-top: 10vh;
`;

const ProfileContainer =styled.div`
    height: 30vh;
    display: flex;
    justify-content: center;
`;

const FirstContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 80%;
`;
const Propic = styled.div`
    background-color: green;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 10px 40px;
`;
const DescContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
`;
const Name = styled.div`
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const UsernameContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Username = styled.div`
    color: #39B290;
    font-weight: 600;
`;

const Verified = styled.div`
margin-left: 5px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #39B290;
`;

const Description = styled.div`
    font-weight: 400;
    margin-bottom: 10px;
`;

const ReadMoreContainer = styled.div`
    display: flex;
`;
const Readmore = styled.div`
    font-weight: 600;
`;
const ReadmoreIcon = styled.div``;

const StatsConatainer = styled.div`
    margin-left: 300px;
`;

const FollowersContainer = styled.div``;
const Followers = styled.div``;
const FollowerStat = styled.div``;
const FollowingContainer = styled.div``;
const Following = styled.div``;
const FollowingStat = styled.div``;
const ForsaleContainer = styled.div``;
const Forsale = styled.div``;
const ForsaleStat = styled.div``;
const SecondContainer = styled.div``;
const IconsContainer = styled.div``;
const ButtonContainer = styled.div``;

const Profile = () => {
    return (
       <Container>
           <Navbar/>
           <ProfileContainer>
               <FirstContainer>
                   <Propic></Propic>
                   <DescContainer>
                       <Name>Catye Best</Name>
                       <UsernameContainer>
                       <Username>@catye</Username>
                       <Verified></Verified>
                       </UsernameContainer>
                       <Description>Catye Best is the digital persona of a russian NFT artist
                           living and working in New York on multiple mediums and conceptual areas of expressions...
                       </Description>
                       <ReadMoreContainer>
                           <Readmore>Readmore</Readmore>
                           <ReadmoreIcon></ReadmoreIcon>
                       </ReadMoreContainer>
                   </DescContainer>
                   <StatsConatainer>
                       <FollowersContainer>
                           <Followers>Followers</Followers>
                           <FollowerStat>213</FollowerStat>
                       </FollowersContainer>
                       <FollowingContainer>
                            <Following>Following</Following>
                            <FollowingStat>12</FollowingStat>
                       </FollowingContainer>
                       <ForsaleContainer>
                           <Forsale>For Sale</Forsale>
                           <ForsaleStat>7</ForsaleStat>
                       </ForsaleContainer>
                   </StatsConatainer>
               </FirstContainer>
               <SecondContainer>
                   <IconsContainer></IconsContainer>
                   <ButtonContainer></ButtonContainer>
               </SecondContainer>
           </ProfileContainer>
       </Container>
    )
}

export default Profile
