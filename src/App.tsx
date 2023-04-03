import { useReducer, useState } from 'react'
import { contacts } from '../db'
import ContactCard from './components/ContactCard'
import { ContactModel } from './types'
import ContactCardForm from './components/forms/ContactCardForm'
import './App.css'
import Card from './components/Card'

enum ContactActionTypes {
    'contacts_ADD',
    'contacts_EDIT',
    'contacts_REMOVE'
}

type ContactsAction = {
    type: ContactActionTypes
    payload: ContactModel | string
}

const contactsReducer = (state: ContactModel[], action: ContactsAction): ContactModel[] => {
    const { type, payload } = action
    switch (type) {
        case ContactActionTypes.contacts_ADD: {
            const model = payload as ContactModel
            const newState = [model, ...state]
            return newState
        }
        case ContactActionTypes.contacts_EDIT: {
            const model = payload as ContactModel
            const newState = state.map((it) => {
                if (it.id === model.id) {
                    return {
                        ...it,
                        ...model
                    }
                }
                return it
            })
            return newState
        }
        case ContactActionTypes.contacts_REMOVE: {
            const newState = state.filter((it) => it.id !== payload)
            return newState
        }
    }
}

function App() {
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
        <div className="App">
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

export default App
