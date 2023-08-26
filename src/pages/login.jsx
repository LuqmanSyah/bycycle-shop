import React from "react";
import Layouts from "../fragments/Layouts";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import InputGroup from "../components/InputGroup";

const LoginPage = () => {
    return (
        <Layouts className={`container my-5`}>
            <span className="fw-bold fs-1 d-flex justify-content-center text-primary my-3">Login</span>
            <div className="d-flex justify-content-center">
                <div className="card border-0">
                    <div className="card-body">
                        <InputGroup type="email" name="email" placeholder="example@gmail.com">
                            Email
                        </InputGroup>
                        <InputGroup type="password" name="password" placeholder="*****">
                            Password
                        </InputGroup>
                        <Button classes="btn-primary w-100 rounded-5">Login</Button>
                        <p className="small my-3">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-decoration-none">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layouts>
    );
};

export default LoginPage;
