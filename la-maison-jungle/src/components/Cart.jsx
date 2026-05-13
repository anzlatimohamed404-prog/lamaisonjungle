/**
 * Le composant Cart represente le panier de courses.
 */

import { useState } from 'react' // J'importe useState pour creer et modifier des etats React.

import styles from '../styles/Cart.module.css' // J'importe les classes CSS du panier.

// Je declare mon composant Cart.
const Cart = () => {
    const [isOpen, setIsOpen] = useState(false) // Je cree l'etat qui dit si le panier est ouvert ou ferme.
    const monsteraPrice = 8 // Je stocke le prix du Monstera.
    const lierre = 12 // Je stocke le prix du Lierre.
    const bouquet = 9 // Je stocke le prix du bouquet de fleurs.
    const [cart, updateCart] = useState(0) // Je cree l'etat qui compte le nombre de Monstera ajoutes.
    
    const handleOpen = () => setIsOpen(true) // J'ouvre le panier en mettant isOpen a true.
    const handleClose = () => setIsOpen(false) // Je ferme le panier en mettant isOpen a false.
    const handleOverlayClick = (e) => { // Je declare la fonction appelee quand on clique sur le fond du panier.
        if (e.target === e.currentTarget) { // Je verifie que le clic est bien sur le fond et pas sur le contenu.
            handleClose() // Je ferme le panier si l'utilisateur clique sur le fond.
        } 
    } 
    return ( 
        <> 
            <button className={styles.cartButton} onClick={handleOpen}> {/* Je cree le bouton qui ouvre le panier. */}
                🛒 Votre panier 
            </button> 

            <div> {/* Je cree le bloc qui affiche le produit et les boutons. */}
                Montsera : {monsteraPrice} € {/* J'affiche le nom du produit et son prix. */}
                <button onClick={() => updateCart(cart + 1)}>Ajouter au panier</button> {/* J'ajoute 1 au panier quand on clique. */}
                <button onClick={() => updateCart(cart > 0 ? cart - 1 : 0)}>Retirer du panier</button> {/* Je retire 1 sans descendre sous 0. */}
                <span> {cart > 0 ? `+${cart}` : cart}</span> {/* J'affiche +1, +2, etc. si le panier contient un produit. */}
            </div> {/* Je ferme le bloc du produit. */}
            
            {isOpen && ( 
                <div className={styles.cartOverlay} onClick={handleOverlayClick}> {/* Je cree le fond sombre cliquable du panier. */}
                    <div className={styles.cart}> {/* Je cree la boite principale du panier. */}
                        <button className={styles.closeButton} onClick={handleClose}> {/* Je cree le bouton pour fermer le panier. */}
                            ✕ {/* J'affiche le symbole de fermeture. */}
                        </button>
                        <h2>Votre panier</h2> 
                        <ul className={styles.cartList}> {/* Je cree la liste des produits du panier. */}
                            <li>Monstera: {monsteraPrice} € x {cart}</li> {/* J'affiche le prix du Monstera et la quantite choisie. */}
                            <li>Lierre: {lierre} €</li> {/* J'affiche le prix du Lierre. */}
                            <li>Bouquet de fleurs: {bouquet} €</li> {/* J'affiche le prix du bouquet de fleurs. */}
                        </ul> 
                        <p className={styles.cartTotal}>Total : {monsteraPrice * cart} €</p> {/* J'affiche le total du Monstera 
                        selon la quantite. */}
                        <button onClick={() => updateCart(0)}>vider</button>

                    </div> 
                </div> 
            )} 
        </> 
    ) 
} 

export default Cart // J'exporte le composant Cart pour l'utiliser dans App.jsx.
