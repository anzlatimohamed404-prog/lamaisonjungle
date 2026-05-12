import styles from '../styles/PlantItem.module.css'

const PlantItem = ({ id, cover, name, water, light, isBestSale, category, isSpecialOffer }) => {
    const handleClick = (event) => {
        console.log("Je clique sur mon evenement :", event);
    }

    // Composant CareScale pour afficher l'échelle de soin
    const CareScale = ({ careType, scaleValue }) => {
        const careIcons = {
            water: '💧',
            light: '☀️'
        }
        return (
            <span className={styles.careScale}>
                {careIcons[careType]} {scaleValue}
            </span>
        )
    }

    return (
        <li key={id} className={styles.lmjPlantItem} onClick={() => handleClick(name)}>
            <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
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
