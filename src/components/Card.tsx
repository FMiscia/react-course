import { HTMLAttributes, PropsWithChildren } from 'react'
import './Card.css'

function Card({ className, children, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
    return (
        <div className={`App-Card ${className ?? ''}`} {...rest}>
            {children}
        </div>
    )
}

export default Card