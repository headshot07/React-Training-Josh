import React from 'react'
import productList from '../productsList.json'
import ProductCard from './ProductCard'

const ProductList = ()=>{
  return (
    <div>
      {productList.map((product) => { return (<ProductCard product = {product}/>) })}
    </div>
  )
}

export default ProductList;