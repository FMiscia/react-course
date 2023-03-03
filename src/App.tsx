import Contacts from './pages/Contacts'
import './App.css'
import React, { useReducer } from 'react'
import { contacts } from '../db'
import contactsReducer, { ContactsReducerAction } from './reducers/ContactsReducer'

export const ContactsContext = React.createContext(contacts)
export const ContactsDispatchContext = React.createContext<React.Dispatch<ContactsReducerAction>>(() => {})

function App() {
    const [list, dispatch] = useReducer(contactsReducer, contacts)
    return (
        <ContactsContext.Provider value={list}>
            <ContactsDispatchContext.Provider value={dispatch}>
                <div>
                    <Contacts />
                </div>
            </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
    )
}

export default App
