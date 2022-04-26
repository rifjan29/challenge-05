import React from 'react'
import { useNavigate } from 'react-router-dom';

const BarSearch = () => {
    let navigate = useNavigate();
    const handleSubmit = () => {
      navigate('/search');
    }

    return (
    <>
        <div className="d-flex justify-content-center">
            <div className="bg-filter">
                <div className="row">
                    <p>Pencarianmu</p>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="title-filter">Tipe Driver</p>
                        <select className="form-select" id="typeDriver" name="typeDriver"
                            aria-label="Default select example">
                            <option disabled selected hidden>Pilih Tipe Driver</option>
                            <option value="Dengan Sopir">Dengan Sopir</option>
                            <option value="Keyless Entry">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <p className="title-filter">Tanggal</p>

                        <input type="date" className="form-control" id="date" name="date" placeholder="Jumlah Penumpang" />
                    </div>
                    <div className="col-auto">
                        <p className="title-filter">Waktu Jemput/Ambil</p>
                        <div className="form-group-time">
                            <select className="form-control" id="time" name="time">
                                <option value="" disabled selected hidden>Pilih Waktu</option>
                                <option value="8">08.00 WIB</option>
                                <option value="9">09.00 WIB</option>
                                <option value="10">10.00 WIB</option>
                                <option value="11">11.00 WIB</option>
                                <option value="12">12.00 WIB</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-auto">
                        <p className="title-filter">Jumlah Penumpang</p>
                        <div className="input-group">
                            <input type="text" className="form-control" id="passenger" placeholder="Jumlah Penumpang" />
                        </div>
                    </div>
                    <div className="col-auto d-flex align-items-end">
                        <button className="btn btn-master btn-search submit btn-primary" onClick={handleSubmit}>Cari Mobil</button>
                    
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default BarSearch