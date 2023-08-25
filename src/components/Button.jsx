import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
    const { isLink, path, classes, children, ...otherProps } = props;

    if (isLink) {
        return (
            <Link to={path} className={`btn ${classes}`} {...otherProps}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className={`btn ${classes}`} {...otherProps}>
                {children}
            </button>
        );
    }
};

export default Button;
