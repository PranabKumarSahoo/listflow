import React, { useState } from 'react';
import './SignUp.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        username: '',
        password: ''
    });

    const signupHandleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const signupSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/api/v1/register', inputs)
            .then((res) => {
                setInputs({
                    email: '',
                    username: '',
                    password: ''
                });
                if (res.data.message === "User already exists!!") {
                    alert(res.data.message);
                } else {
                    alert(res.data.message);
                    navigate('/login');
                }
            });
    }

    return (
        <div className='sign-up'>
            <div className='container text-white text-center'>
                <div className='row sign-up-container'>
                    <div className='sign-up-left col-lg-6 d-flex justify-content-center align-items-center'>
                        <img src="https://i.ibb.co/nDyJcKx/Mobile-login-bro.png" alt="SignUp Img" />
                    </div>
                    <div className='sign-up-right col-lg-6 d-flex justify-content-center align-items-center gap-4'>
                        <div className='input-group'>
                            <div className='sign-up-input'>
                                <IoPerson className="react-icons" />
                                <input
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    onChange={signupHandleChange}
                                    value={inputs.username}
                                />
                            </div>
                            <div className='sign-up-input'>
                                <MdEmail className="react-icons" />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    onChange={signupHandleChange}
                                    value={inputs.email}
                                />
                            </div>
                            <div className='sign-up-input'>
                                <FaLock className="react-icons" />
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    onChange={signupHandleChange}
                                    value={inputs.password}
                                />
                            </div>
                        </div>
                        <div className='signupBtn'>
                            <Link to="/signup">
                                <Button
                                    btnText="Sign Up"
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
                                    onClick={signupSubmit}
                                />
                            </Link>
                        </div>
                        <p>Have an account?<Link to='/login'> Log In</Link> here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;