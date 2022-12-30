import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
with: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ), 
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;

display: flex;
align-items: center;
justify-content: center;`;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Form = styled.form``;
const Link = styled.p``;
const Button = styled.button``;
const Input = styled.input``;


const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT</Link>
                </Form> 
            </Wrapper>
        </Container>
  )
}

export default Login