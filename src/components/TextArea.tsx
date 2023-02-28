import { TextareaHTMLAttributes } from 'react'
import './TextArea.css'

function TextArea({label, ...textAreaProps}: TextAreaProps) {

    return (
        <div className='App-TextArea'>
            <div className="TextAreaLabel">{label}</div>
            <textarea {...textAreaProps} />
        </div>
    )
}

type TextAreaProps = {
    label?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default TextArea
