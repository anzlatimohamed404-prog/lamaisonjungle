import styles from '../styles/ShoppingList.module.css'

const plantList = [
    { name: 'Monstera',       category: 'classique', id: '1', isBestSale: true  },
    { name: 'Ficus lyrata',   category: 'classique', id: '2', isBestSale: false },
    { name: 'Pothos argenté', category: 'classique', id: '3', isBestSale: false },
    { name: 'Yucca',          category: 'classique', id: '4', isBestSale: false },
    { name: 'Palmier',        category: 'classique', id: '5', isBestSale: false },
    { name: 'Mawa fulera',    category: 'classique', id: '6', isBestSale: false },
    { name: 'Mubwasera',      category: 'classique', id: '7', isBestSale: false },
    { name: 'Langui langui',  category: 'classique', id: '8', isBestSale: false },
]

const cartItems = [
    { name: 'Monstera',         price: 8  },
    { name: 'Lierre',           price: 12 },
    { name: 'Bouquet de fleurs',price: 9  },
]

const total = cartItems.reduce((acc, item) => acc + item.price, 0)

const ShoppingList = () => {
    return (
        <div>
            <ul className={styles['lmj--plant-list']}>
                {plantList.map((plant) => (
                    <li
                        key={plant.id}
                        className={plant.isBestSale ? styles['best-sale'] : ''}
                    >
                        <span className={styles.dot}></span>
                        {plant.name}
                    </li>
                ))}
            </ul>

            <div className={styles['lmj--shopping-cart']}>
                <h2>Votre panier</h2>
                {cartItems.map((item) => (
                    <div key={item.name} className={styles['cart-item']}>
                        <span>{item.name}</span>
                        <span>{item.price} €</span>
                    </div>
                ))}
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{total} €</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingList