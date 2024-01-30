import React from 'react'
import './ProductListing.styles.css'
import ProductImage from '../../../assests/Booksimages/atomic habits.webp';
import ProductListingCards from '../../cards/productListingCards/ProductListingCards';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
  return (
    <div className='product-listing-container'>
      <div className='container'>
        <p>Product Listing</p>
         <h2>Here are some <span className='text-primary'>books</span> that you might like</h2>
        
        <div className='listing-container'>
          {BookData.slice(0,4).map((book)=>(
            < ProductListingCards key={book.id} bookData={book}/>
          ))}
          
         
        </div>
        
      </div>
        
    </div>
  )
}

export default ProductListing;