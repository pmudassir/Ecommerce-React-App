import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute; 
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;



const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
    background-color: gray;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.2);

    &:hover{
        opacity: 1;
        transition: all 0.3s ease;
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        
    }
`;

const Product = ({productItem}) => {
  return (
    <Container>
        <Circle/>
        <Image src={productItem.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product