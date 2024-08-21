import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

  const addToCartHandler = () => {
    console.log('Add to cart clicked')
    // Add to cart logic here
  }

  return (
    <div className='home'>
      <section></section>

      <h1>Latest Products
        <Link to={'/search'} className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard productId='abas' name="Macbook" price={4544} stock={435} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/6128S+OCfGL._SY355_.jpg' />
      </main>
    </div>
  )
}

export default Home