import ContactCard from '../components/ContactCard'
import { useContext } from 'react'
import { ContactModel } from '../types'
import CreateContactForm from '../components/form/CreateContactForm'
import { ContactsContext, ContactsDispatchContext } from '../App'

function Contacts() {
    const dispatch = useContext(ContactsDispatchContext)
    const list = useContext(ContactsContext)

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
