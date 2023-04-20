import { ComponentPropsWithoutRef } from 'react'
import './Button.css'

function Button({ label, className, secondary = false, ...rest }: ButtonProps) {
    return (
        <button
            className={`App-Button ${secondary && 'App-Button-Secondary '}${className ?? ''}`}
            {...rest}>
            {label}
        </button>
    )
}

type ButtonProps = {
    label: string
    secondary?: boolean
} & ComponentPropsWithoutRef<'button'>

export default Button
