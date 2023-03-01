import { ButtonHTMLAttributes } from 'react'
import './Button.css'

function Button({ label, className, ...rest }: ButtonProps) {
    return <button className={`App-Button ${className}`}  {...rest}>{label}</button>
}

type ButtonProps = {
    label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default Button
