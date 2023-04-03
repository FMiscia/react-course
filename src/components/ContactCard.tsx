import { useState } from 'react'
import { ContactModel } from '../types'
import Button from './Button'
import Card from './Card'
import './ContactCard.css'
import ContactCardForm from './forms/ContactCardForm'

function ContactCard({ name, email, notes, phone, id, onEdit, onDelete }: ContactCardProps) {
    const [isEdit, setIsEdit] = useState(false)
    return isEdit ? (
        <Card className='App-ContactCard'>
            <ContactCardForm
                initialValues={{ email, name, notes, phone, id }}
                onSubmit={(model) => {
                    setIsEdit(false)
                    onEdit?.(model)
                }}
            />
            <Button style={{ marginTop: '4px' }} onClick={() => setIsEdit(false)} label="CLOSE" />
        </Card>
    ) : (
        <Card className='App-ContactCard'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p style={{ flexGrow: 1 }}>{notes}</p>
            <Button onClick={() => setIsEdit(!isEdit)} label="EDIT" />
            <Button style={{ marginTop: '4px' }} onClick={() => onDelete?.(id)} label="DELETE" />
        </Card>
    )
}

type ContactCardProps = ContactModel & {
    onEdit?: (contact: ContactModel) => void
    onDelete?: (id: string) => void
}

export default ContactCard
