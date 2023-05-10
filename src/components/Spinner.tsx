import { ComponentPropsWithoutRef } from 'react'
import './Spinner.css'

const Spinner = ({ className = '' }: ComponentPropsWithoutRef<'div'>) => {
    return (
        <div className={`App-Spinner ${className}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner
