import { useState } from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleBlur = () => {
        if (!inputValue.includes('@')) {
            alert('Veuillez saisir une adresse mail correcte. Il manque @')
        }
    }

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <footer className={styles.lmFooter}>
            <div className={styles.lmFooterElem}>
                Pour les passionnes de plantes
            </div>
            <div className={styles.lmFooterElem}>
                Laissez-nous votre email:
            </div>

            <input
                placeholder="Entrez votre email"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer
