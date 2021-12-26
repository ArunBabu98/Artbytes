import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Home/Navbar';

const Container = styled.div``;

const ProfileContainer =styled.div`
    background-color: green;
    height: 50vh;
`;

const = styled.div``;

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
