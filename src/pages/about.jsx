import React from "react";
import Layouts from "../fragments/Layouts";

const AboutPage = () => {
    return (
        <Layouts className={`container my-5`}>
            <FirstSection />
            <hr />
            <SecondSection />
            <hr />
            <ThirdSection />
            <hr />
            <FourthSection />
        </Layouts>
    );
};

const FirstSection = () => (
    <section className="mb-5">
        <div className="row">
            <div className="col-md-6">
                <span className="fw-normal fs-4 d-flex justify-content-start">
                    Di VelocycleHub kami bangga memiliki komitmen terhadap inovasi terus-menerus dalam dunia sepeda. Setiap produk yang kami tawarkan di toko kami telah dipilih dengan hati-hati untuk memastikan bahwa Anda mendapatkan yang
                    terbaik dari yang terbaik.
                </span>
            </div>
        </div>
    </section>
);
const SecondSection = () => (
    <section className="mb-5">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <span className="fw-normal fs-4 d-flex text-end">
                    Salah satu inovasi terbaru kami adalah Sepeda Gunung. Produk ini menggabungkan teknologi mutakhir dengan desain ergonomis yang mengutamakan kenyamanan dan performa. Sepeda Gunung dirancang untuk memenuhi kebutuhan para
                    pengendara sepeda modern.
                </span>
            </div>
        </div>
    </section>
);
const ThirdSection = () => (
    <section className="mb-5">
        <div className="row">
            <div className="col-md-6">
                <span className="fw-normal fs-4">
                    Kami berkomitmen untuk terus mencari dan menghadirkan inovasi-inovasi baru yang memungkinkan Anda mengeksplorasi dunia bersepeda dengan lebih baik lagi. Dari teknologi material hingga desain yang revolusioner, kami
                    selalu berusaha untuk memberikan produk yang membuat setiap perjalanan bersepeda Anda menjadi lebih istimewa.
                </span>
            </div>
        </div>
    </section>
);

const FourthSection = () => (
    <section className="mb-5">
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
                <span className="fw-normal fs-4 d-flex text-end">
                    Jika Anda ingin mengetahui lebih lanjut tentang inovasi-inovasi terbaru yang kami tawarkan, jangan ragu untuk menghubungi tim kami atau menjelajahi koleksi produk kami di situs web ini.
                </span>
            </div>
        </div>
    </section>
);

export default AboutPage;
