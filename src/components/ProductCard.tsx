import { memo } from 'react'
import { Product } from '../types'
import Button from './Button'
import Card from './Card'
import './ProductCard.css'

function ProductCardNoMemo({
    title,
    price,
    description,
    images,
    id,
    onButtonClick,
    buttonLabel = 'SAVE'
}: ProductCardProps) {
    return (
        <Card className="App-ProductCard">
            <h3>{title}</h3>
            <img src={images[0]} />
            <p>{price}€</p>
            <p className="ProductCardNotes">{description}</p>
            <Button
                className="margin-top-xs"
                onClick={() => onButtonClick?.(id)}
                label={buttonLabel}
            />
        </Card>
    )
}

const ProductCard = memo(ProductCardNoMemo)

type ProductCardProps = Product & {
    onButtonClick?: (id: number) => void
    buttonLabel?: string
}

export default ProductCard
