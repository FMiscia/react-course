import { ComponentPropsWithoutRef } from 'react'
import './TextArea.css'

function TextArea({ label, className = '', ...textAreaProps }: TextAreaProps) {
    return (
        <div className={`App-TextArea ${className}`}>
            <div className="TextAreaLabel">{label}</div>
            <textarea {...textAreaProps} />
        </div>
    )
}

type TextAreaProps = {
    label?: string
} & ComponentPropsWithoutRef<'textarea'>

export default TextArea
