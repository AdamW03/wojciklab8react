import React, { useState } from 'react';
import styles from '../styles/ShowImageComponent.module.css';

function ShowImageComponent() {
    const [show, setShow] = useState(false);

    function showImage() {
        setShow(!show);
    }

    return (
        <div className={styles.showImage}>
            <h2>Show Image</h2>
            <button onClick={showImage}>
                {show ? 'Schowaj Baron w wannie' : 'Pokaż Baron w wannie'}
            </button>
            {show && <img src={`${process.env.PUBLIC_URL}/assets/wanna.jpg`} alt="Baron w wannie"/>}
        </div>
    );
}

export default ShowImageComponent;
