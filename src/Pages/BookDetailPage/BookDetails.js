import React from 'react'
import Navbarr from '../../Components/Layouts/Navbar/Navbarr'
import DetailsSection from '../../Components/Layouts/details-section/DetailsSection'
import Footer from '../../Components/Layouts/footer/Footer'
const BookDetails = () => {
  return (
    <section>
      <Navbarr darkTheme={true}/>
      <DetailsSection />
      <Footer/>
    </section>
  )
}

export default BookDetails