import { memo, useState } from 'react'
import { ContactModel } from '../types'
import Button from './Button'
import Card from './Card'
import './ContactCard.css'
import ContactCardForm from './forms/ContactCardForm'
import useIsOnline from '../hooks/useIsOnline'
import Modal from './Modal'

function ContactCardNoMemo({ name, email, notes, phone, id, onEdit, onDelete }: ContactCardProps) {
    const [isEdit, setIsEdit] = useState(false)
    const isOnline = useIsOnline()
    return isEdit ? (
        <Modal visible={isEdit}>
            <Card className="App-ContactCard">
                <ContactCardForm
                    initialValues={{ email, name, notes, phone, id }}
                    disabled={!isOnline}
                    onSubmit={(model) => {
                        setIsEdit(false)
                        onEdit?.(model)
                    }}
                />
                <Button
                    style={{ marginTop: '4px' }}
                    onClick={() => setIsEdit(false)}
                    label="CLOSE"
                />
            </Card>
        </Modal>
    ) : (
        <Card className="App-ContactCard">
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p style={{ flexGrow: 1, whiteSpace: 'pre-wrap' }}>{notes}</p>
            <Button onClick={() => setIsEdit(!isEdit)} label="EDIT" />
            <Button style={{ marginTop: '4px' }} onClick={() => onDelete?.(id)} label="DELETE" />
        </Card>
    )
}

const ContactCard = memo(ContactCardNoMemo)

type ContactCardProps = ContactModel & {
    onEdit?: (contact: ContactModel) => void
    onDelete?: (id: string) => void
}

export default ContactCard
