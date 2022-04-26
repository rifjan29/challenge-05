import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/barSearch/barSearch'
import CardCars from '../../components/Card/CardCars';

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
        <SearchBar />
        <div className='container'>
            <section className="section-showcase">
                <div className="row showcase">
                    <CardCars />
                </div>
            </section>
        </div>
        <Footer />
    </>
    )
}

export default Search