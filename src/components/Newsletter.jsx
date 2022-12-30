import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Desc = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding: 20px;
`;

const Button = styled.button`
    background-color: teal;
    cursor: pointer;
    flex: 1;
    border: none;
    color: white;
`;

const InfoContainer = styled.div`
    height: 40px;
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InfoContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InfoContainer>
        
    </Container>
  )
}

export default Newsletter