import React, { useState } from 'react';
import styles from '../styles/HandleMouseOverComponent.module.css';

function HandleMouseOverComponent() {
    const [style, setStyle] = useState({ color: 'black', fontStyle: 'normal' });

    function handleMouseOver() {
        setStyle(prevStyle => ({
            ...prevStyle,
            color: 'red',
            fontStyle: 'italic'
        }));
    }

    function handleMouseOut() {
        setStyle(prevStyle => ({
            ...prevStyle,
            color: 'black',
            fontStyle: 'normal'
        }));
    }

    return (
        <div className={styles.mouseOver}>
            <h2>Handle Mouse Over</h2>
            <p
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                style={style}
            >
                Najedź myszką na ten tekst!
            </p>
        </div>
    );
}

export default HandleMouseOverComponent;
