import ContactCard from '../components/ContactCard'
import { contacts } from '../../db'
import { useReducer, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import { uid } from '../utils'
import Card from '../components/Card'
import { ContactModel } from '../types'

interface ContactsReducerAction {
    type: 'contacts/ADD' | 'contacts/EDIT' | 'contacts/REMOVE'
    payload: ContactModel | string
}

const contactsReducer = (state: ContactModel[], action: ContactsReducerAction): ContactModel[] => {
    const type = action.type
    const payload = action.payload
    switch (type) {
        case 'contacts/ADD': {
            const newElement = payload as ContactModel
            return [newElement, ...state]
        }
        case 'contacts/EDIT': {
            const item = payload as ContactModel
            const newList = state.map((it) => {
                if (it.id === item.id) {
                    return {
                        ...it,
                        ...item
                    }
                }
                return it
            })

            return newList
        }
        case 'contacts/REMOVE': {
            const newList = state.filter((it) => it.id !== payload)
            return newList
        }
    }
}

function Contacts() {
    const [list, dispatch] = useReducer(contactsReducer, contacts)
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
        dispatch({ type: 'contacts/REMOVE', payload: id })
    }

    const editContact = (contact: ContactModel) => {
        dispatch({ type: 'contacts/EDIT', payload: contact })
    }

    const createContact = (contact: ContactModel) => {
        dispatch({ type: 'contacts/ADD', payload: contact })
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
