import React from 'react';
import './Footer.css';
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer container-fluid p-4 text-white'>
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-title">
                    <Link to='/'>ListFlow</Link>
                </div>
                <div className='footer-copyright'>
                    Developed by <a href="https://pranabks.vercel.app" target='_blank' rel="noreferrer">Pranab KS</a>
                </div>
                <div className='social-links'>
                    <a href="https://github.com/PranabKumarSahoo/listflow" target='_blank' rel="noreferrer">
                        GitHub <FiArrowUpRight />
                    </a>
                    <a href="https://twitter.com/PranavvvKS" target='_blank' rel="noreferrer">
                        Twitter <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Footer;