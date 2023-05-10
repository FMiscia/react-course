import { ComponentPropsWithRef, LegacyRef, forwardRef } from 'react'
import './Input.css'

function InputWithRef(
    { label, className = '', ...inputProps }: InputProps,
    ref: LegacyRef<HTMLInputElement>
) {
    return (
        <div className={`App-Input ${className}`}>
            <div className="InputLabel">{label}</div>
            <input ref={ref} {...inputProps} />
        </div>
    )
}

const Input = forwardRef(InputWithRef)

type InputProps = {
    label?: string
} & ComponentPropsWithRef<'input'>

export default Input
