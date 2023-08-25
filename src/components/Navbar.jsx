import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Products",
        path: "/products",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    VelocycleHub
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-2" id="navbarNav">
                    <ul className="mx-auto navbar-nav">
                        {links.map((link) => (
                            <li className="nav-item">
                                <Link className="nav-link active" to={link.path}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Button isLink={true} path="/login" classes="btn-primary btn-sm rounded-5 px-4 w-100">Login</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
