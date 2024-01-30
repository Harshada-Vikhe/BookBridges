import React from 'react'
import './Showcase.styles.css' 
import Navbarr from '../Navbar/Navbarr'
import SearchInputform from '../../Forms/SearchInputForm/SearchInputform'

const Showcase = () => {
  return (
    <>
    <section  className='showcase-container'>
        <Navbarr darkTheme={false}/>

      <div className='showcase-content'>
        <h1>Best <span className='text-primary'>Books</span> Available</h1>
        <p>Buy quality books at cheaper price</p>
        
        <SearchInputform darkTheme={true}/>
      </div>
    </section>
    </>
  )
}

export default Showcase