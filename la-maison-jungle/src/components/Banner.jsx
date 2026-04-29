
import styles from '../styles/Banner.module.css'
import logo from '../assets/fleur blanche.jpg' 

const Banner = () => {
  const title = "Bienvenue à la maison jungle"

  return (
    <div className={styles.banner}>
      <img src={logo} alt="fleur blanche" className={styles.bannerLogo}/>
      <h1 className={styles.bannerTitle}>{title}</h1>
    </div>
  )
}



// On exporte le composant Banner en tant qu'export par défaut,
// ce qui permet aux autres fichiers du projet de l'importer facilement
// avec la syntaxe : import Banner from './Banner'
// Sans cet export, le composant resterait inaccessible depuis l'extérieur de ce fichier
export default Banner

