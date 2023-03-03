import { useState } from 'react'
import { ContactModel } from '../types'
import Button from './Button'
import Card from './Card'
import './ContactCard.css'
import Input from './Input'
import TextArea from './TextArea'

function ContactCard(props: ContactCardProps) {
    const [isEditMode, setEditMode] = useState(false)
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email)
    const [phone, setPhone] = useState(props.phone)
    const [notes, setNotes] = useState(props.notes)

    return (
        <Card className="App-ContactCard">
            {isEditMode ? (
                <>
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
                </>
            ) : (
                <>
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                    <p>{props.phone}</p>
                    <p className="ContactCardNotes" style={{ flexGrow: 1 }}>
                        {props.notes}
                    </p>
                </>
            )}
            <Button label="Email" />
            <Button
                style={{ marginTop: '4px' }}
                label={isEditMode ? 'Save' : 'Edit'}
                onClick={() => {
                    if (!isEditMode) {
                        setEditMode(true)
                        return
                    }
                    setEditMode(false)
                    const item = { id: props.id, name, email, phone, notes }
                    props.onEdit(item)
                }}
            />
            <Button
                style={{ marginTop: '4px' }}
                label="Delete"
                onClick={() => props.onDelete(props.id)}
            />
        </Card>
    )
}

type ContactCardProps = {
    onDelete: (id: string) => void
    onEdit: (model: ContactModel) => void
} & ContactModel

export default ContactCard
