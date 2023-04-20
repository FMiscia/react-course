import { memo, useRef, useState } from 'react'
import { ContactModel } from '../../types'
import { uid } from '../../utils'
import Button from '../Button'
import Input from '../Input'
import TextArea from '../TextArea'

function ContactCardFormNoMemo({
    initialValues,
    onSubmit,
    disabled = false
}: ContactCardFormProps) {
    const [name, setName] = useState(initialValues?.name ?? '')
    const [email, setEmail] = useState(initialValues?.email ?? '')
    const [phone, setPhone] = useState(initialValues?.phone ?? '')
    const [notes, setNotes] = useState(initialValues?.notes ?? '')
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                label="Name"
                ref={inputRef}
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
            <TextArea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes"
                label="Notes"
            />
            <Button
                label={!disabled ? 'SALVA' : 'DISABLED'}
                disabled={disabled}
                onClick={() => {
                    if (!name) {
                        inputRef.current?.focus()
                        return
                    }
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

const ContactCardForm = memo(ContactCardFormNoMemo)

type ContactCardFormProps = {
    onSubmit: (contact: ContactModel) => void
    initialValues?: ContactModel
    disabled?: boolean
}

export default ContactCardForm
