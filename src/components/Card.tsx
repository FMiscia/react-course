import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import './Card.css'

function Card({
    className = '',
    children,
    ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
    return (
        <div className={`App-Card ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Card
