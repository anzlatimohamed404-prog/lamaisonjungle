/**
 * Le composant Cart represente le panier de courses.
 */

import { useState } from 'react'
import styles from '../styles/Cart.module.css'

// Je déclare mon composant Cart
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const monstera = 8
    const lierre = 12
    const bouquet = 9
    
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }
    
    return (
        <>
            <button className={styles.cartButton} onClick={handleOpen}>
                🛒 Votre panier
            </button>
            
            {isOpen && (
                <div className={styles.cartOverlay} onClick={handleOverlayClick}>
                    <div className={styles.cart}>
                        <button className={styles.closeButton} onClick={handleClose}>
                            ✕
                        </button>
                        <h2>Votre panier</h2>

                        <ul className={styles.cartList}> 
                            <li>Monstera: {monstera} €</li>
                            <li>Lierre: {lierre} €</li>
                            <li>Bouquet de fleurs: {bouquet} €</li>
                        </ul>
                        <p className={styles.cartTotal}>Total : {monstera + lierre + bouquet} €</p>

                    </div>
                </div>
            )}
        </>
    )
        
        
}

export default Cart
