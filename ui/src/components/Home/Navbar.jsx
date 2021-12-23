import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Container = styled.div`
  height: 9vh;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  padding-top: 20px;
  padding-left: 10px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Search = styled.input`
  width: 35vw;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  border-color: lightgray;
`;
const ItemContainer = styled.div``;
const Item = styled.span``;
const IconContainer = styled.div`
  display: flex;
`;
const Icon = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="assets/logo.png"></Logo>
          <Title>ARTBYTES.</Title>
        </Left>
        <Right>
          <Search placeholder="search"></Search>
          <ItemContainer>
            <Item>Explore</Item>
            <Item>Stats</Item>
            <Item>Resources</Item>
            <Item>Create</Item>
          </ItemContainer>
          <IconContainer>
            <Icon>
              <AccountCircleOutlinedIcon />
            </Icon>
            <Icon>
              <AccountBalanceWalletOutlinedIcon />
            </Icon>
          </IconContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
