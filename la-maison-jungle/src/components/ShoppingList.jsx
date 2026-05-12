/**
 * ShoppingList est un composant qui affiche la liste des plantes
 */

import styles from '../styles/ShoppingList.module.css';
import PlantItem from './plantitem';


import montseraImg from '../assets/fleur1.jpg';
import ficusImg from '../assets/fleur2.png';
import pothosImg from '../assets/plante2 (1).jpg';
import  yuccoImg from '../assets/plante3.jpg';
import  palmierImg from '../assets/fleur-jaune.png';

// Liste des plantes avec toutes les informations necessaires
const planList = [
    {
        name: 'monstera',
        category: 'Local',
        id: '1',
        isBestSale: true,
        isSpecialOffer: true,
        water: 3,
        light: 1,
        cover: montseraImg
    },
    {
        name: 'ficus lyarata',
        category: 'Local',
        id: '2',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 5,
        cover: ficusImg
    },
    {
        name: 'pothos argenté',
        category: 'Local',
        id: '3',
        isBestSale: false,
        isSpecialOffer: false,
        water: 3,
        light: 5,
        cover: pothosImg
    },
    {
        name: 'yucco',
        category: 'Importer',
        id: '4',
        isBestSale: false,
        isSpecialOffer: false,
        water: 6,
        light: 5,
        cover: yuccoImg
    },
    {
        name: 'palmier',
        category: 'Importer',
        id: '5',
        isBestSale: false,
        isSpecialOffer: false,
        water: 2,
        light: 3,
        cover: palmierImg
    }
];

const ShoppingList = () => {
    return (
        <ul className={styles.lmjPlantList}>
            {planList.map(({ id, name, cover, water, light, isBestSale, category, isSpecialOffer }) => (
                <PlantItem
                    key={id}
                    id={id}
                    name={name}
                    cover={cover}
                    water={water}
                    light={light}
                    isBestSale={isBestSale}
                    category={category}
                    isSpecialOffer={isSpecialOffer}
                />
            ))}
        </ul>
    );
};

export default ShoppingList;
