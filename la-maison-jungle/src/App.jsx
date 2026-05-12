// J'importe le composant Banner depuis le fichier './components/Banner'
import Banner from './components/Banner'
// J'importe le composant Cart
import Cart from './components/Cart'
// J'importe le composant ShoppingList
import ShoppingList from './components/ShoppingList'
// J'importe le logo de la maison
import logo from './assets/hero.png'
// J'importe les styles CSS du Banner
import styles from './styles/Banner.module.css'

// Je déclare le composant App, qui est une fonction qui retourne du JSX
function App() {
  // Titre de bienvenue affiché dans la bannière
  const title = "Bienvenue à la maison !"

  /**
   * Lorsque j'appelle le composant <Banner>, j'y insère deux enfants : <img> et <h1>. 
   * Ces enfants sont récupérés dans Banner.jsx à l'aide de props {children}.
   */

  // Retourne le JSX du composant App
  return (
    <>
      {/* Composant Banner qui contient le logo et le titre */}
      <Banner>
         <img src={logo} alt="Logo de la maison" className={styles.logo} />
         <h1 className={styles.title}>{title}</h1>
      </Banner>

      {/* Composant Cart pour le panier */}
      <Cart />

      {/* Composant ShoppingList pour la liste des plantes */}
      <ShoppingList />
    </>
  )
}

// J'exporte le composant App pour pouvoir l'utiliser dans main.jsx
export default App
