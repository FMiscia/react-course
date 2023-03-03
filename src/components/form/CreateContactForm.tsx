import { useState } from 'react'
import useIsOnline from '../../hooks/useIsOnline'
import { ContactModel } from '../../types'
import { uid } from '../../utils'
import Button from '../Button'
import Card from '../Card'
import Input from '../Input'
import TextArea from '../TextArea'

function CreateContactForm(props: CreateContactFormProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')
    const isOnline = useIsOnline()

    // Example of component update effect
    // useEffect(() => {
    //     alert(`sei diventato ${isOnline ? 'online' : 'offline'}`)
    // }, [isOnline])

    const resetForm = () => {
        setName('')
        setEmail('')
        setNotes('')
        setPhone('')
    }

    const addCard = () => {
        const contact = { id: uid(), name, email, phone, notes }
        props.onSubmit(contact)
        resetForm()
    }

    return (
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
                disabled={!isOnline}
                label={isOnline ? 'AGGIUNGI CONTATTO' : 'SEI OFFLINE'}
                onClick={() => {
                    if (!email || !name) {
                        return alert('Nome e Email sono obbligatori')
                    }
                    addCard()
                }}
            />
        </Card>
    )
}

type CreateContactFormProps = {
    onSubmit: (contact: ContactModel) => void
}

export default CreateContactForm
