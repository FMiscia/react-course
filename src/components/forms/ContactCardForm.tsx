import { useState } from 'react'
import { ContactModel } from '../../types'
import { uid } from '../../utils'
import Button from '../Button'
import Input from '../Input'

function ContactCardForm({ initialValues, onSubmit }: ContactCardFormProps) {
    const [name, setName] = useState(initialValues?.name ?? '')
    const [email, setEmail] = useState(initialValues?.email ?? '')
    const [phone, setPhone] = useState(initialValues?.phone ?? '')
    const [notes, setNotes] = useState(initialValues?.notes ?? '')
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                label="Name"
            />
            <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                label="Email"
            />
            <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                label="Phone"
            />
            <Input
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
                label="Notes"
            />
            <Button
                label="SALVA"
                onClick={() => {
                    const contact = {
                        id: initialValues?.id ?? uid(),
                        name,
                        email,
                        phone,
                        notes
                    }
                    onSubmit(contact)
                }}
            />
        </div>
    )
}

type ContactCardFormProps = {
    onSubmit: (contact: ContactModel) => void
    initialValues?: ContactModel
}

export default ContactCardForm
