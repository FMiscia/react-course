import ContactCard from '../components/ContactCard'
import { contacts } from '../../db'
import { useReducer } from 'react'
import { ContactModel } from '../types'
import contactsReducer from '../reducers/ContactsReducer'
import CreateContactForm from '../components/form/CreateContactForm'

function Contacts() {
    const [list, dispatch] = useReducer(contactsReducer, contacts)

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
            <CreateContactForm onSubmit={createContact} />
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
