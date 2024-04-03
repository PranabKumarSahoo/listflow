import React from 'react';
import './Home.css';
import Button from '../Button/Button';
import { TiTick } from "react-icons/ti";

const Home = () => {
    return (
        <>
            <div className='home d-flex flex-column justify-content-center align-items-center'>
                <div className="container text-white text-center d-flex flex-column gap-3">
                    <h1>ListFlow</h1>
                    <h2>A Simple & Mininal To-do List.</h2>
                    <h3>Stay <b>Organized <TiTick /></b> Prioritize <b>Tasks <TiTick /></b> Achieve Your<b> Goals <TiTick /></b></h3>
                    <div className='homeBtn'>
                        <a href="/">
                            <Button
                                btnText="Get Started"
                                btnTextWeight="600"
                                btnTextColor="black"
                                btnTextSpacing="0.5px"
                                btnBgColor="white"
                                btnBorder="none"
                                btnOutline="none"
                                btnPadding="15px 30px"
                                btnBorderRadius="50px"
                                btnHoverShadow="0 20px 60px rgba(0, 0, 0, 0.4)"
                                btnTransition=".3s"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;