import React, { PropsWithChildren, useReducer } from 'react'
import { contacts } from '../../db'
import contactsReducer, { ContactsAction } from '../reducers/contactsReducer'
import { ContactModel } from '../types'

export const ContactsStoreContext = React.createContext<ContactModel[]>([])
export const ContactsDispatchContext = React.createContext<React.Dispatch<ContactsAction>>(() => {})

function ContactsContextProvider({ children }: PropsWithChildren) {
    const [list, dispatch] = useReducer(contactsReducer, contacts)

    return (
        <ContactsStoreContext.Provider value={list}>
            <ContactsDispatchContext.Provider value={dispatch}>
                {children}
            </ContactsDispatchContext.Provider>
        </ContactsStoreContext.Provider>
    )
}

export default ContactsContextProvider
