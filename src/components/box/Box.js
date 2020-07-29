import React from 'react'
import styles from './Box.module.css'

function Box({children}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Box
