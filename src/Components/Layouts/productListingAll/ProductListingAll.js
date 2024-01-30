import React from 'react'
import './productListingAll.styles.css'

import ProductListingCards from '../../cards/productListingCards/ProductListingCards'
import { BookData } from '../../../util/BookData'

const ProductListingAll = () => {
    
  return (
    <section className='product-listing-all-container'>
        <div className='container'>
          <div className='grid-container'>
           
            {BookData.map((book)=>{
               return (
                  <div className='grid-item'>
                  <ProductListingCards  bookData={book}/>
               </div>
               )
            })}
            
            
          </div>
        </div>
    </section>
  )
}

export default ProductListingAll