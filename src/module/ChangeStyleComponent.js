import React, { useState } from 'react';
import styles from '../styles/ChangeStyleComponent.module.css';

function ChangeStyleComponent() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleStyleChange() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={styles.changeStyleContainer}>
            <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
                <button onClick={handleStyleChange} className={styles.toggleButton}>
                    Change Style
                </button>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem Ipsum</h1>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                        cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                        ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                        lacinia arcu eget nulla.
                    </p>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                        cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                        ipsum.
                    </p>
                    <ul className={styles.list}>
                        <li>Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ChangeStyleComponent;
