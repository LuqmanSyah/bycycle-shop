import React from "react";
import Layouts from "../fragments/Layouts";
import CardProducts from "../components/CardProducts";
import { banner } from "../assets";
import { cardProductHome, testimoni } from "../constants";
import CardTestimoni from "../components/CardTestimoni";

const HomePage = () => {
    return (
        <Layouts>
            <HeroSection />
            <SpecialOffersSection />
            <Testimoni />
        </Layouts>
    );
};

const HeroSection = () => (
    <section>
        <div className="d-flex justify-content-center">
            <img src={banner} alt="" className="shadow img-fluid" />
            <span className="fw-semibold text-center text-capitalize text-dark-emphasis m-5 position-absolute fs-1 d-none d-lg-block container">
                Saatnya bersepeda dengan gaya! <br /> Selamat datang di VelocycleHub.
            </span>
        </div>
        <span className="fw-semibold d-flex text-center justify-content-center text-dark-emphasis container my-3 fs-4 d-lg-none">
            Saatnya bersepeda dengan gaya! <br /> Selamat datang di VelocycleHub.
        </span>
    </section>
);

const SpecialOffersSection = () => (
    <section className="my-5">
        <div className="container">
            <span className="fw-semibold text-center fs-2 text-dark-emphasis d-none d-lg-block mb-4">Penawaran Spesial Musim Ini</span>
            <span className="fw-semibold d-flex text-center justify-content-center text-dark-emphasis mx-5 my-3 fs-3 d-lg-none">Penawaran Spesial Musim Ini</span>
            <div className="row">
                {cardProductHome.map((product) => (
                    <div className="col-md-4">
                        <CardProducts name={product.name} price={product.price}>
                            {product.body}
                        </CardProducts>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimoni = () => (
    <section className="my-5">
        <div className="container">
            <span className="fw-semibold text-center fs-2 text-dark-emphasis d-none d-lg-block mb-4">Testimoni</span>
            <span className="fw-semibold d-flex text-center justify-content-center text-dark-emphasis my-3 fs-3 d-lg-none">Testimoni</span>
            <div className="row">
                {testimoni.map((data) => (
                    <div className="col-md-3 col-6">
                        <CardTestimoni name={data.name}>{data.body}</CardTestimoni>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HomePage;
