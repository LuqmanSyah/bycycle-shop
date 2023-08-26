import React from "react";

const Label = (props) => {
    const { name, children } = props;

    return (
        <label htmlFor={name} className="form-label">
            {children}
        </label>
    );
};

export default Label;
