import React from 'react'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import Footer from '../../Components/Layouts/footer/Footer'
import CartItemsContainer from '../../Components/Layouts/cartItemsContainer/CartItemsContainer'

const CartPage = () => {
  return (
    <section>
      <Navbarr darkTheme={true}/>

        <CartItemsContainer/>

      <Footer/>
    </section>
  )
}

export default CartPage