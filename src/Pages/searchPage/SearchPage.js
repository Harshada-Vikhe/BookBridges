import React, { useEffect, useState } from 'react'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import Footer from '../../Components/Layouts/footer/Footer'
import './SearchPage.styles.css';
import { useLocation } from 'react-router-dom';
import { BookData } from '../../util/BookData';
import SearchResultCard from '../../Components/cards/searchResultCard/SearchResultCard';

const SearchPage = () => {
   const location=  useLocation();
   const [searchResult,setSearchResult]= useState([]);
   
   useEffect(()=>{
      let searchValue=[];
     
      searchValue= BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));
      
      setSearchResult(searchValue);
    },[])

  return (
    <section>
        <Navbarr darkTheme={true}/>
        <div className='search-result-container'>
            <div className='container'>
                <h2>Your Search Result</h2>
                {
                    searchResult.map((result)=>(
                        <SearchResultCard key={result.id} bookData={result} />
                    ))
                }
            </div>
        </div>

        <Footer/>
    </section>
  )
}

export default SearchPage