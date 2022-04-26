import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/barSearch/barSearch'
import CardDetailCars from '../../components/Card/CardDetailCar';

const Search = () => {
  return (
  <>
    <Navbar />
    <section className="section-1 clone">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center hero">
        </div>
      </div>
    </section>
    <div className="container margin">
      <SearchBar />
      <section className="section-showcase mt-5">
        <CardDetailCars />
      </section>
    </div>
    <Footer />
  </>
  )
}

export default Search