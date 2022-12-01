import React from "react";
import styles from './Error.module.css'


function Error() {
    return (
        <div className={styles.containerError}>
            <div>
                <h1>404</h1>
                <p>This is not the web page you are looking for.</p>

            </div>
            </div>
    )
}

export default Error;