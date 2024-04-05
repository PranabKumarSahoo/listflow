import React from 'react';
import './LogIn.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='log-in'>
            <div className='container text-white text-center'>
                <div className='row log-in-container'>
                    <div className='log-in-left col-lg-6 d-flex justify-content-center align-items-center'>
                        <img src="https://i.ibb.co/T2s53vf/Sign-in-pana.png" alt="SignIn Img" />
                    </div>
                    <div className='log-in-right col-lg-6 d-flex justify-content-center align-items-center gap-4'>
                        <div className='input-group'>
                            <div className='log-in-input'>
                                <MdEmail className="react-icons" />
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className='log-in-input'>
                                <FaLock className="react-icons" />
                                <input type="password" placeholder='Password' />
                            </div>
                        </div>
                        <div className='loginBtn'>
                            <Link to="/login">
                                <Button
                                    btnText="Log In"
                                    btnTextWeight="600"
                                    btnTextColor="black"
                                    btnTextSpacing="0.5px"
                                    btnBgColor="white"
                                    btnBorder="none"
                                    btnOutline="none"
                                    btnPadding="10px 30px"
                                    btnBorderRadius="50px"
                                    btnHoverShadow="0 20px 60px rgba(0, 0, 0, 0.4)"
                                    btnTransition=".3s"
                                />
                            </Link>
                        </div>
                        <p>Don't have an account yet?<Link to='/signup'> Sign Up</Link> here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;