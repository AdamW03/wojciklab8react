import React, { useState } from 'react';
import styles from '../styles/HandleClickComponent.module.css';

function HandleClickComponent() {
    const [state, setClickCount] = useState({ clickCount: 0 });

    function handleClick() {
        setClickCount(prevState => ({
            ...prevState,
            clickCount: prevState.clickCount + 1
        }));
    }

    return (
        <div className={styles.handleClick}>
            <h2>Handle Click</h2>
            <button onClick={handleClick}>Kliknij mnie!</button>
            <p>Kliknięcia: {state.clickCount}</p>
        </div>
    );
}

export default HandleClickComponent;
