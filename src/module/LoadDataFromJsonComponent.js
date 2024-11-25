import React, { useState } from 'react';
import styles from '../styles/LoadDataFromJsonComponent.module.css';

function LoadDataFromJsonComponent() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [fileList, setFileList] = useState([
        'atrydziList.json',
        'corrinoList.json',
        'harkonnenList.json',
    ]);

    function loadData(fileName) {
        fetch(`${process.env.PUBLIC_URL}/jsonData/${fileName}`)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error('Nie udało się załadować pliku.');
                }
                return response.json();
            })
            .then(function(data) {
                setData(data);
                setError(null);
            })
            .catch(function(err) {
                setError(err.message);
                setData(null);
            });
    }

    // function addFile(newFile) {
    //     setFileList(prevFileList => [...prevFileList, newFile]);
    // }

    return (
        <div className={styles.load_data_container}>
            <h2>Wybierz plik do załadowania:</h2>
            <div>
                {fileList.map((fileName, index) => (
                    <button key={index} onClick={() => loadData(fileName)}>
                        Załaduj {fileName}
                    </button>
                ))}
            </div>

            <div className={styles.loaded_json}>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {data ? (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                ) : (
                    !error && <p>Brak danych do wyświetlenia.</p>
                )}
            </div>
        </div>
    );
}

export default LoadDataFromJsonComponent;
