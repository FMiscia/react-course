import React, { useReducer } from 'react'
import Contacts from './pages/Contacts'
import './App.css'
import { contacts } from '../db'
import contactsReducer, { ContactsAction } from './reducers/contactsReducer'

export const ContactsStoreContext = React.createContext(contacts)
export const ContactsDispatchContext = React.createContext<React.Dispatch<ContactsAction>>(() => {})

function App() {
    const [list, dispatch] = useReducer(contactsReducer, contacts)

    return (
        <ContactsStoreContext.Provider value={list}>
            <ContactsDispatchContext.Provider value={dispatch}>
                <div className="App">
                    <Contacts />
                </div>
            </ContactsDispatchContext.Provider>
        </ContactsStoreContext.Provider>
    )
}

export default App
