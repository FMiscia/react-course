import { HTMLAttributes } from 'react'
import './Button.css'

function Button({ label, ...rest }: ButtonProps) {
    return <button className='App-Button' {...rest}>{label}</button>
}

type ButtonProps = {
    label: string
} & HTMLAttributes<HTMLButtonElement>

export default Button
