import React from 'react';
import './Button.css';

const Button = ({ btnText, btnTextWeight, btnTextSpacing, btnBgColor, btnHoverShadow, btnTextColor, btnBorder, btnOutline, btnPadding, btnBorderRadius, btnTransition }) => {

    const btnStyle = {
        backgroundColor: btnBgColor,
        color: btnTextColor,
        fontWeight: btnTextWeight,
        letterSpacing: btnTextSpacing,
        border: btnBorder,
        borderRadius: btnBorderRadius,
        outline: btnOutline,
        padding: btnPadding,
        boxShadow: btnHoverShadow,
        transition: btnTransition,
    };

    return (
        <button style={btnStyle} className='btnStyle'>
            {btnText}
        </button>
    )
}

export default Button;