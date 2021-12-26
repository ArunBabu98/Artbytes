import React from "react";
import styled from "styled-components";
import n1 from "../../images/n1.jfif";
import n2 from "../../images/n2.jpg";
import n3 from "../../images/n3.jpg";

const Container = styled.div`
  height: 100vh;
  margin-top: 10px;
`;

const TitleContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

const CardsContainer = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
`;

const Card = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 3px 3px 7px gray;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: 8px 8px 12px gray;
  }
`;

const Picture = styled.img`
  height: 70%;
  width: 100%;
  background: url("${(props) => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Description = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${(props) => props.color};
  color: white;
`;

const DescTitle = styled.h1``;

const Desc = styled.div``;

const Button = styled.button`
  margin-top: 40px;
  height: 30px;
  width: 40px;
  border-radius: 30%;
  border: 2px solid white;
  color: white;
  background-color: transparent;
`;

const Notable = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Notable Drops</Title>
      </TitleContainer>
      <CardsContainer>
        <Cards>
          <Card>
            <Picture image={n1}></Picture>
            <Description color="#600003">
              <DescTitle>Julie</DescTitle>
              <Desc>A collection of exquisite portrait drawings</Desc>
              <Button>Live</Button>
            </Description>
          </Card>
          <Card>
            <Picture image={n2}></Picture>
            <Description color="#F2AE62">
              <DescTitle>Psychedelics</DescTitle>
              <Desc>Representation of states of minds</Desc>
              <Button>Live</Button>
            </Description>
          </Card>
          <Card>
            <Picture image={n3}></Picture>
            <Description color="#698964">
              <DescTitle>Astronouts</DescTitle>
              <Desc>Different flavours of Astronout collection</Desc>
              <Button>Live</Button>
            </Description>
          </Card>
        </Cards>
      </CardsContainer>
    </Container>
  );
};

export default Notable;
