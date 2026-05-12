// Je cree un label pour expliquer la quantite de soin.
const quantityLabel = {
    1: 'peu',
    2: 'moderement',
    3: 'beaucoup'
}

// Je declare le composant CareScale.
const CareScale = ({ scaleValue, careType }) => {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧'
    const careLabel = careType === 'light' ? 'de lumiere' : "d'arrosage"

    const handleClick = () => {
        alert(`Cette plante a besoin de ${quantityLabel[Math.min(scaleValue, 3)]} ${careLabel}`)
    }

    return (
        <div>
            {range.map((rangeElement) =>
                scaleValue >= rangeElement ? (
                    <span
                        key={rangeElement.toString()}
                        onClick={handleClick}
                        style={{ cursor: 'pointer' }}
                    >
                        {scaleType}
                    </span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
