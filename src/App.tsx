import './App.css'
import { contacts } from '../db'
import ContactCard from './components/ContactCard'
import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import TextArea from './components/TextArea'
import { uid } from './utils'

function App() {
    const [list, setList] = useState(contacts)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')
    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Input
                    value={name}
                    label="name"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    value={email}
                    label="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    value={phone}
                    label="phone"
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextArea
                    value={notes}
                    label="notes"
                    placeholder="notes"
                    onChange={(e) => setNotes(e.target.value)}
                />
                <Button
                    label="ADD"
                    onClick={() => {
                        const contact = {
                            id: uid(),
                            email,
                            name,
                            notes,
                            phone
                        }
                        setList([contact, ...list])
                    }}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {list.map((it) => (
                    <ContactCard key={it.id} {...it} />
                ))}
            </div>
        </div>
    )
}

export default App
