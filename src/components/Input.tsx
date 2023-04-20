import { InputHTMLAttributes } from 'react'
import './Input.css'

function Input({ label, className, ...inputProps }: InputProps) {
    return (
        <div className={`App-Input ${className ?? ''}`}>
            <div className="InputLabel">{label}</div>
            <input {...inputProps} />
        </div>
    )
}

type InputProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default Input
