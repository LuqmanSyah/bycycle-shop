import React from "react";
import Layouts from "../fragments/Layouts";
import InputGroup from "../components/InputGroup";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const RegisterPage = () => {
    return (
        <Layouts className={`container my-5`}>
            <span className="fw-bold fs-1 d-flex justify-content-center text-primary my-3">Register</span>
            <div className="d-flex justify-content-center">
                <div className="card border-0">
                    <div className="card-body">
                        <InputGroup type="text" name="name" placeholder="fullname">
                            Name
                        </InputGroup>
                        <InputGroup type="email" name="email" placeholder="example@gmail.com">
                            Email
                        </InputGroup>
                        <InputGroup type="password" name="password" placeholder="*****">
                            Password
                        </InputGroup>
                        <InputGroup type="password" name="confirm_password" placeholder="*****">
                            Confirm Password
                        </InputGroup>
                        <Button classes="btn-primary w-100 rounded-5">Login</Button>
                        <p className="small my-3 text-center">
                            Have an account?{" "}
                            <Link to="/login" className="text-decoration-none">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default RegisterPage;
