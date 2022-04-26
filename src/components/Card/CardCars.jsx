import React, { useEffect } from 'react';
import User from '../../assets/icon/fi_users.svg'
import Setting from '../../assets/icon/fi_settings.svg'
import Calendar from '../../assets/icon/fi_calendar.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../redux/action/carAction';
import { Link } from 'react-router-dom';
import { handleCarByID } from '../../redux/action/carByIdAction';


const CardCars = () => {
    
    const dispatch = useDispatch();

    const { isLoading: loadingCar, data: carData} = useSelector(
        (state) => state.car
    );
    useEffect(() => {
        dispatch(getCar());
     // eslint-disable-next-line
    }, []);

    return (
    <>
        {loadingCar ? 'Loading' : carData?.map((item) => (
        <div className="col-lg-4 col-md-6 col-12 mt-5 mx-0">
            <div className="card">
                <div className="card-body">
                    <img src={`${ item.image }`} className="showcase-img" alt="..." />
                    <div className="car-name">{`${ item.name }`}</div>
                    <div className="car-price">Rp {`${ item.price }`} / Hari</div>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="icon">
                        <p className='card-text'>
                            <img className='me-1' src={User} alt="icon-key" />4 Orang
                        </p>
                        <p className='card-text'>
                            <img className='me-1' src={Setting} alt="icon-clock" />Manual
                        </p>
                        <p className="card-text">
                            <img className='me-1' src={Calendar} alt="icon-clock" />Tahun {`${ item.createdAt }`}
                        </p>
                    </div>
                    {/* <button className="btn btn-primary w-100 choose-car" to={`/search/${item.id}`} onClick={() => dispatch(handleCarByID(item))}>Pilih
                        Mobil</button> */}
                    <Link
                        to={`/search/${item.id}`}
                        className="btn btn-primary  w-100 choose-car"
                        onClick={() => dispatch(handleCarByID(item))}>
                        Pilih Mobil
                    </Link>
                </div>
            </div>
        </div>
        ))}
    </>
    )
}

export default CardCars;