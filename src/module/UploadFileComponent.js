import React, { useState } from 'react';
import styles from '../styles/UploadFileComponent.module.css';

function UploadFileComponent() {
    const [fileData, setFileData] = useState(null);

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFileData(reader.result);
            };
            reader.readAsText(file);
        }
    }

    return (
        <div className={styles.uploadFile}>
            <h2>Upload File</h2>
            <input type="file" id="fileInput" onChange={handleFileChange} className={styles.hiddenInput}/>
            <label htmlFor="fileInput" className={styles.customButton}>
                Wybierz plik
            </label>
            {fileData && <pre>{fileData}</pre>}
        </div>
    );
}

export default UploadFileComponent;
