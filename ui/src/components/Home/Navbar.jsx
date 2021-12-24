import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SearchIcon from '@mui/icons-material/Search';

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
  cursor: pointer;
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

const Middle = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 5px 3px 5px lightgray;
  }
`;

const SearchIconContainer = styled.div`
  padding-right: 10px;
  padding-top: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Search = styled.input`
  width: 30vw;
  height: 40px;
  margin-right: 20px;
  border:none;
  font-size: 20px;
  outline:none;
  /* border-radius: 10px;
  border-color: lightgray; */
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;
const Item = styled.span`
  margin: 0px 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color:gray;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props=>props.name === "create" && "#39B290" || "black"};
    font-size: ${props=>props.name === "create" && "22px" || "20px"};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Icon = styled.div`
  display: flex;
  transform: scale(1.8);
  padding:30px;
  color: gray;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: black;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="assets/logo.png"></Logo>
          <Title>ARTBYTES.</Title>
        </Left>
        <Middle>
          <SearchContainer>
          <SearchIconContainer>
              <SearchIcon/>
            </SearchIconContainer>
            <Search placeholder="search"></Search>
          </SearchContainer>
        </Middle>
        <Right>
          <ItemContainer>
            <Item name="explore">Explore</Item>
            <Item name="stats">Stats</Item>
            <Item name="resources">Resources</Item>
            <Item name="create">Create</Item>
          </ItemContainer>
          <IconContainer>
            <Icon>
              <AccountCircleOutlinedIcon/>
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
