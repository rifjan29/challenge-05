import React from 'react'
import Car from '../../assets/img/car.svg'

const Hero = () => {
    return (
    <>
        <section className="section-1">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center hero">
                    <div className="col-lg-6 col-12">
                        <h1 className="header">
                            Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)
                        </h1>
                        <p className="description">
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam
                        </p>
                        <button className="btn btn-master btn-primary">Mulai Sewa Mobil</button>
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-self-end justify-content-end">
                        <div className="rectangle"></div>
                        <img src={Car} className="img-fluid img-car" alt="Banner Rental Mobil" data-aos="fade-left"
                            data-aos-duration="1000" />
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Hero