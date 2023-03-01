import { HTMLAttributes, PropsWithChildren } from "react";
import './Card.css'

function Card({className, ...rest}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
    return (
        <div className={`App-Card ${className ?? ''}`} {...rest} />
    )
}

export default Card