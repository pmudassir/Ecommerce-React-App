import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Image = styled.img``

const Product = ({productItem}) => {
  return (
    <Container>
        <Image src={productItem.img}/>
    </Container>
  )
}

export default Product