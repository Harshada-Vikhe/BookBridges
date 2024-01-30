import React from 'react'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import SearchInputForm from '../../Components/Forms/SearchInputForm/SearchInputform';
import './BooksPage.styles.css';
import ProductListingAll from '../../Components/Layouts/productListingAll/ProductListingAll';
import Footer from '../../Components/Layouts/footer/Footer'

const Bookspage = () => {
  return (
    <section>
      <Navbarr darkTheme={true} />

      <div className='search-container'>
        <h2>Find the <span className='text-primary'>books</span> that you want</h2>
        <SearchInputForm  darkTheme={false}/>

      </div>
      <ProductListingAll />
      <Footer />
    </section>
  )
}

export default Bookspage