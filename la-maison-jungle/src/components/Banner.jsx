// Importation des styles CSS modules pour ce composant
import styles from '../styles/Banner.module.css'
// Importation de l'image de la fleur jaune depuis le dossier assets
import fleur from '../assets/fleur-jaune.png'

// Définition du composant Banner sous forme de fonction fléchée
const Banner = () => {
    // La fonction retourne le JSX qui sera rendu
    return (
        // Conteneur principal du composant
        <div>
            {/* Section bannière avec l'image et le titre */}
            <div className={styles.banner}>
                {/* Image de la fleur avec attribut alt pour l'accessibilité */}
                <img src={fleur} alt="fleur-jaune" />
                {/* Titre principal de bienvenue */}
                <h1>Bienvenue à la maison jungle</h1>
            </div>
            {/* Navigation avec les liens du menu */}
            <nav className={styles.nav}>
                {/* Lien vers la section Plantes */}
                <a href="#">Plantes</a>
                {/* Lien vers la section Conseil */}
                <a href="#">Conseil</a>
                {/* Lien vers la section À propos */}
                <a href="#">À propos</a>
            </nav>
        </div>
    )
}

// Exportation du composant pour pouvoir l'importer ailleurs
export default Banner