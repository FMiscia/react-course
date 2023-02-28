import './App.css'
import { contacts } from '../db'
import ContactCard from './components/ContactCard'
import { useState } from 'react'
import Button from './components/Button'

function App() {
    const [number, setNumber] = useState(1)
    return (
        <div className="App">
            <h2>COUNTER: {number}</h2>
            <Button label='INCREMENT' onClick={() => {
                setNumber(number + 1)
                setNumber(number + 1)
                setNumber(number + 5)
            }} />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {contacts.map((it) => (
                    <ContactCard key={it.id} {...it} />
                ))}
            </div>
        </div>
    )
}

export default App
