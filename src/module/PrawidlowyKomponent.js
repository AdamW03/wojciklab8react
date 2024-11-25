import React from 'react';
import { useState} from "react";
import { harkonnenList } from '../data/harkonnenData';
import styles from '../styles/PrawidlowyKomponent.module.css';

function PrawidlowyKomponent(props) {
    const [index, setIndex] = useState(0);

    function handleNext() {
        setIndex((index + 1) % harkonnenList.length);
    }

    function handlePrev() {
        setIndex((index - 1 + harkonnenList.length) % harkonnenList.length);
    }

    let character = harkonnenList[index];

    return (
        <div className={styles.galeria}>
            <h2>Niepoprawna Galeria Harkonenów</h2>
            <button onClick={handlePrev}>Poprzedni</button>
            <button onClick={handleNext}>Kolejny</button>
            <h4>({index + 1} of {harkonnenList.length})</h4>
            <h3>
                <i>{character.name}</i> ({character.role})
            </h3>
            <img src={`${process.env.PUBLIC_URL}`+character.imagePath} alt={character.name}/>
            <p>{character.description}</p>
        </div>
    );
}

export default PrawidlowyKomponent;