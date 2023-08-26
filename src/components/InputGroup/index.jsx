import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputGroup = (props) => {
    const { type, name, children, placeholder } = props;

    return (
        <div className="form-group mb-3">
            <Label name={name}>{children}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    );
};

export default InputGroup;
