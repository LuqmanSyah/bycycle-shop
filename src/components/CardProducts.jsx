import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { product } from "../assets";

const CardProducts = (props) => {
    const { name, children, price } = props;

    return (
        <div className="card shadow mb-4 border-0">
            <Link href="" className="text-decoration-none text-dark">
                <img src={product} alt="" className="img-fluid rounded-top" />
                <div className="card-body text-center">
                    <span className="fw-bold fs-5">{name}</span>
                    <p className="text-muted text-truncate" style={{ maxWidth: "500px" }}>{children}</p>
                    <p className="small mb-1">{price}</p>
                    <Button isLink={true} classes="btn-info w-100 rounded-5 btn-sm hover">
                        Beli 🛒
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default CardProducts;
