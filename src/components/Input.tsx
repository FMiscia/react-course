import { InputHTMLAttributes } from 'react'
import './Input.css'

function Input({label, ...inputProps}: InputProps) {

    return (
        <div className='App-Input'>
            <div className="InputLabel">{label}</div>
            <input {...inputProps} />
        </div>
    )
}

type InputProps = {
    label?: string
} & InputHTMLAttributes<HTMLInputElement>

export default Input
