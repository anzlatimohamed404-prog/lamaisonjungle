import CareScale from './CareSale'
import styles from '../styles/Plantitem.module.css'

const PlantItem = ({ id, cover, name, water, light, category, isSpecialOffer }) => {
    const handleClick = (plantName) => {
        console.log('Je clique sur mon evenement :', plantName)
    }

    const handleImageClick = (event) => {
        event.stopPropagation()
        alert(`Vous avez clique sur l'image de ${name}`)
    }

    return (
        <li key={id} className={styles.lmjPlantItem} onClick={() => handleClick(name)}>
            <img
                className={styles.lmjPlantItemCover}
                src={cover}
                alt={`${name} cover`}
                onClick={handleImageClick}
            />
            {name}

            <div className={styles.careScales}>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>

            {isSpecialOffer && <span className={styles.lmjSales}>Solde</span>}

            <span className={`${styles.category} ${category === 'Local' ? styles.local : styles.importer}`}>
                {category}
            </span>
        </li>
    )
}

export default PlantItem
