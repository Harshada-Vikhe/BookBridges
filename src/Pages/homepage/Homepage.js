import React from 'react'
import Showcase from '../../Components/Layouts/Showcase/Showcase'
import ProductListing from '../../Components/Layouts/productListing/ProductListing'
import Footer from '../../Components/Layouts/footer/Footer'
const Homepage = () => {
  return (
    <>
    <section >
      <Showcase/>
      <ProductListing/>
      <Footer/>
    </section>
    </>
  )
}

export default Homepage