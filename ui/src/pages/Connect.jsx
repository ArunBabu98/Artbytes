import React from "react";
import styled from "styled-components";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";
import meta from '../images/metamask.png';

const Container = styled.div`
`;
const Wrapper = styled.div`
  margin-top: 10vh;
  margin-bottom: 5vh;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
    height: 90%;
    width: 50%;
`;
const Title = styled.h1``;
const Description = styled.span`
    font-size: 20px;
    color: gray;
`;
const WalletContainer = styled.div`
    margin-top: 20px;
    width: 85%;
    height: 70%;
    border-radius: 20px;
    border: 1px solid lightgray;
`;

const Card = styled.div`
    height: 19%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        box-shadow: 3px 3px 7px gray;
    }
`;
const Logo = styled.div`
    height: 40px;
    width: 40px;
    margin-left: 50px;
    margin-right: 30px;
    border-radius: 50%;
    background: url("${props=>props.image}");
    background-size: cover;
`;
const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Connect = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Contents>
          <Title>Connect your wallet.</Title>
          <Description>
            Connect with one of our available wallet providers or create a new
            one.
          </Description>
          <WalletContainer>
              <Card>
                  <Logo image={meta}></Logo>
                  <Name>Metamask</Name>
              </Card>
              <Card>
                  <Logo></Logo>
                  <Name>Metamask</Name>
              </Card>
              <Card>
                  <Logo></Logo>
                  <Name>Metamask</Name>
              </Card>
              <Card>
                  <Logo></Logo>
                  <Name>Metamask</Name>
              </Card>
          </WalletContainer>
        </Contents>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Connect;
