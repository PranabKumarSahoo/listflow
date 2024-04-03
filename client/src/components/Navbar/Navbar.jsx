import React from 'react';
import './Navbar.css';
import { RiTodoFill } from "react-icons/ri";
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-white" href='/'>
                        <b><RiTodoFill /> ListFlow</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <div className='signInBtn'>
                                    <a href="/signin">
                                        <Button
                                            btnText="SignIn"
                                            btnTextWeight="600"
                                            btnTextColor="black"
                                            btnTextSpacing="0.5px"
                                            btnBgColor="white"
                                            btnBorder="1px solid rgba(0, 0, 0, 0.1)"
                                            btnOutline="none"
                                            btnPadding="10px 25px"
                                            btnBorderRadius="50px"
                                            btnHoverShadow="2px 2px 60px rgba(238, 130, 238, 0.3)"
                                            btnTransition=".3s"
                                        />
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='signUpBtn'>
                                    <a href="/signup">
                                        <Button
                                            btnText="SignUp"
                                            btnTextWeight="600"
                                            btnTextColor="black"
                                            btnTextSpacing="0.5px"
                                            btnBgColor="white"
                                            btnBorder="1px solid rgba(0, 0, 0, 0.1)"
                                            btnOutline="none"
                                            btnPadding="10px 25px"
                                            btnBorderRadius="50px"
                                            btnHoverShadow="2px 2px 60px rgba(238, 130, 238, 0.3)"
                                            btnTransition=".3s"
                                        />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;