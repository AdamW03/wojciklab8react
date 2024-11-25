import React from 'react';
import { harkonnenList } from '../data/harkonnenData';
import styles from '../styles/PrawidlowyKomponent.module.css';

function NiePrawidlowyKomponent(props) {
    let index = 0;

    function handleClick() {
        index += 1;
    }

    let character = harkonnenList[index];

    return (
        <div className={styles.galeria}>
            <h2>Niepoprawna Galeria Harkonenów</h2>
            <button onClick={handleClick}>Kolejny</button>
            <h4>({index + 1} of {harkonnenList.length})</h4>
            <h3>
                <i>{character.name}</i> ({character.role})
            </h3>
            <img src={`${process.env.PUBLIC_URL}`+character.imagePath} alt={character.name}/>
            <p>{character.description}</p>
        </div>
    );
}

export default NiePrawidlowyKomponent;