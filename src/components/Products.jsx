import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(category ? `http://localhost:5000/api/products?categor=${category}` : "http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts()
  }, [category]); //here category is the dependency with which this useEffect is executed.

  useEffect(()=>{
    category && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key, value]) => 
        item[key].includes(value))
      )
    )
  }, [products, category, filters]);  
  // if a category is there setFilteredProducts by filtering through each item and tries to match the filter
  // with every key and value in that object and returns only the matching products

  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      )
    } else if(sort === "asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.price - b.price)
      )
    } else {
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => b.price - a.price)
      )
    }
  },[sort])

  return (
    <Container>
      {category 
        ? filteredProducts.map((item) => ( <Product productItem={item} key={item.id}/>))  //if there is a category display filteres
        : popularProducts.slice(0,8).map((item) => (<Product productItem={item} key={item.id}/>))
      }
    </Container>
  )
};

export default Products