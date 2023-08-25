import React from "react";
import { person } from "../assets";

const CardTestimoni = (props) => {
    const { name, children } = props;

    return (
        <div className="card shadow mb-3">
            <img src={person} alt="" className="w-100 rounded-top" />
            <div className="card-body">
                <span className="fs-3 fw-semibold">{name}</span>
                <p className="text-truncate text-muted">{children}</p>
            </div>
        </div>
    );
};

export default CardTestimoni;
