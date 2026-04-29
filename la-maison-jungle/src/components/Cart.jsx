import styles from '../styles/Cart.module.css'

const Cart = () => {
    const monstera = 8
    const lierre = 12
    const bouquet = 9

    return (
        <div className={styles.cart}>
            <h2 className={styles.cartTitle}>Votre panier</h2>
            <ul className={styles.cartList}>
                <li className={styles.cartItem}>Monstera : {monstera} €</li>
                <li className={styles.cartItem}>Lierre : {lierre} €</li>
                <li className={styles.cartItem}>Bouquet de fleurs : {bouquet} €</li>
            </ul>
            <p className={styles.cartTotal}>Total : {monstera + lierre + bouquet} €</p>
        </div>
    )
}

// On exporte le composant Cart en tant qu'export par défaut,
// ce qui permet aux autres fichiers du projet de l'importer facilement
// avec la syntaxe : import Cart from './Cart'
// Sans cet export, le composant resterait inaccessible depuis l'extérieur de ce fichier
export default Cart