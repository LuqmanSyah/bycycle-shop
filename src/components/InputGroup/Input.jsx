import React from "react";

const Input = (props) => {
    const { type, name, ...otherProps } = props;

    return <input type={type} id={name} name={name} {...otherProps} className="form-control" />;
};

export default Input;
