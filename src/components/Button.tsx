import { ButtonHTMLAttributes } from 'react'
import './Button.css'

function Button({ label, ...rest }: ButtonProps) {
    return <button className='App-Button' {...rest}>{label}</button>
}

type ButtonProps = {
    label: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default Button
