import { useContext } from 'react'
import ContactCard from '../components/ContactCard'
import { ContactModel } from '../types'
import ContactCardForm from '../components/forms/ContactCardForm'
import Card from '../components/Card'
import { ContactActionTypes } from '../reducers/contactsReducer'
import { ContactsDispatchContext, ContactsStoreContext } from '../contexts/ContactsContext'
import useIsOnline from '../hooks/useIsOnline'

function Contacts() {
    const list = useContext(ContactsStoreContext)
    const dispatch = useContext(ContactsDispatchContext)
    const isOnline = useIsOnline()

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
                <ContactCardForm onSubmit={createContact} disabled={!isOnline} />
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
