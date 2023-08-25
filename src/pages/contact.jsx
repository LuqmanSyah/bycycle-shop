import React from "react";
import Layouts from "../fragments/Layouts";

const ContactPage = () => {
    return (
        <Layouts className={`container my-5 h-100`}>
            <span className="fs-2 text-dark-emphasis d-flex justify-content-center mb-3">Kontak</span>
            <div className="card mx-5 bg-secondary shadow-lg text-white">
                <div className="card-body mh-100">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">
                                    Nama
                                </label>
                                <input type="text" className="form-control" placeholder="fullname" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label htmlFor="" className="form-label">
                                    Email
                                </label>
                                <input type="text" className="form-control" placeholder="example@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="form-label">
                            Masukkan
                        </label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Ketik disini..."></textarea>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default ContactPage;
