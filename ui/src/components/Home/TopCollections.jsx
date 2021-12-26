import React from "react";
import styled from "styled-components";
import ether from "../../images/ether.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 85%;
`;

const TitleContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

const TableConatiner = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const Table = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  transition: all 0.2s ease-in;

  &:hover {
    box-shadow: 8px 8px 12px gray;
    border-radius: 20px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
const Serial = styled.h1`
  font-size: 20px;
  margin-right: 20px;
`;
const Pic = styled.div`
  margin-right: 20px;
  height: 50px;
  width: 50px;
  border: 1px solid #39b290;
  border-radius: 50%;
  background: url("${props=> props.bg}");
  background-size: 50px 50px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const PriceContainer = styled.div`
  display: flex;
`;
const Ether = styled.div`
  margin-right: 5px;
  height: 20px;
  width: 20px;
  background: url("${(props) => props.image}");
  background-size: cover;
`;
const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Change = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${props=>props.cr};
`;

const RankingContainer = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #39b290;
  background-color: white;
  border: 2px solid #39b290;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #39b290;
    color: white;
    box-shadow: 3px 3px 3px gray;
  }
`;

const TopCollections = () => {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Top Collections</Title>
        </TitleContainer>
        <TableConatiner>
          <Table>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic bg="https://www.niftyzone.com/wp-content/uploads/2021/08/square_punk7864.jpg"></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change cr="#39b290">+53.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>2</Serial>
                <Pic bg="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0"></Pic>
                <Desc>
                  <DescTitle>Mutant Ape</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>9,245.07</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change cr="#39b290">+194.94%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>3</Serial>
                <Pic bg="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0"></Pic>
                <Desc>
                  <DescTitle>Mutant Ape</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>7,225.65</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change cr="#39b290">+7.10%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>4</Serial>
                <Pic bg="https://lh3.googleusercontent.com/wzxBcOr_VAjwDqkaQ4ppAsc556coUTWIQf6db_tobrmmi4z8u0KwPM8qam421G6o_fLgjpB8jyUcDYEjxqaR6oMFbjxx937YmWFOdQ=s0"></Pic>
                <Desc>
                  <DescTitle>Vox Collectible</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>5,860.61</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change cr="#39b290">+400.54%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>5</Serial>
                <Pic bg="https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s0"></Pic>
                <Desc>
                  <DescTitle>Clone X</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>5,367.73</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change cr="red">-86.36%</Change>
              </Right>
            </Card>
          </Table>
          <Table>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
          </Table>
          <Table>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
            <Card>
              <Left>
                <Serial>1</Serial>
                <Pic></Pic>
                <Desc>
                  <DescTitle>Crypto Punks</DescTitle>
                  <PriceContainer>
                    <Ether image={ether}></Ether>
                    <Price>11,397.21</Price>
                  </PriceContainer>
                </Desc>
              </Left>
              <Right>
                <Change>+9.1%</Change>
              </Right>
            </Card>
          </Table>
        </TableConatiner>
        <RankingContainer>
          <Button>Go to Rankings</Button>
        </RankingContainer>
      </Wrapper>
    </Container>
  );
};

export default TopCollections;
