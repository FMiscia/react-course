import ContactCard from '../components/ContactCard'
import { contacts } from '../../db'
import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { uid } from '../utils'
import Card from '../components/Card'
import { ContactModel } from '../types'

function Contacts() {
    const [list, setList] = useState(contacts)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
        setNotes('')
        setPhone('')
    }

    const deleteContact = (id: string) => {
        const newList = list.filter((it) => it.id !== id)
        setList(newList)
    }

    const editContact = (model: ContactModel) => {
        const newList = list.map((it) => {
            if (it.id === model.id) {
                return {
                    ...it,
                    ...model
                }
            }
            return it
        })
        setList(newList)
    }

    const createContact = (contact: ContactModel) => {
        setList([contact, ...list])
    }

    return (
        <div className="App">
            <Card style={{ flexDirection: 'column', margin: 8 }}>
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
                    style={{ marginTop: 4 }}
                    label="AGGIUNGI CONTATTO"
                    onClick={() => {
                        if (!email || !name) {
                            return alert('Nome e Email sono obbligatori')
                        }
                        const contact = {
                            id: uid(),
                            email,
                            name,
                            notes,
                            phone
                        }
                        createContact(contact)
                        resetForm()
                    }}
                />
            </Card>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {list.map((it) => (
                    <ContactCard
                        key={it.id}
                        {...it}
                        onDelete={deleteContact}
                        onEdit={editContact}
                    />
                ))}
            </div>
        </div>
    )
}

export default Contacts
