import { useReducer } from 'react'
import { contacts } from '../../db'
import ContactCard from '../components/ContactCard'
import { ContactModel } from '../types'
import ContactCardForm from '../components/forms/ContactCardForm'
import Card from '../components/Card'
import contactsReducer, { ContactActionTypes } from '../reducers/contactsReducer'

function Contacts() {
    const [list, dispatch] = useReducer(contactsReducer, contacts)

    const createContact = (model: ContactModel) => {
        dispatch({ type: ContactActionTypes.contacts_ADD, payload: model })
    }

    const editContact = (model: ContactModel) => {
        dispatch({ type: ContactActionTypes.contacts_EDIT, payload: model })
    }

    const deleteContact = (id: string) => {
        dispatch({ type: ContactActionTypes.contacts_REMOVE, payload: id })
    }

    return (
        <div>
            <Card>
                <ContactCardForm onSubmit={createContact} />
            </Card>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                {list.map((it) => {
                    return (
                        <ContactCard
                            key={it.id}
                            onEdit={editContact}
                            onDelete={deleteContact}
                            {...it}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Contacts
