import { createContext, PropsWithChildren, useReducer } from 'react'
import { contacts } from '../../db'
import contactsReducer, { ContactsReducerAction } from '../reducers/ContactsReducer'
import { ContactModel } from '../types'

export const ContactsContext = createContext<ContactModel[]>([])
export const ContactsDispatchContext = createContext<React.Dispatch<ContactsReducerAction>>(
    () => {}
)

function ContactsProvider(props: PropsWithChildren) {
    const [list, dispatch] = useReducer(contactsReducer, contacts)

    return (
        <ContactsContext.Provider value={list}>
            <ContactsDispatchContext.Provider value={dispatch}>
                {props.children}
            </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
    )
}

export default ContactsProvider
