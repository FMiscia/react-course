import { useState } from 'react'
import { contacts } from '../db'
import ContactCard from './components/ContactCard'
import { ContactModel } from './types'
import ContactCardForm from './components/forms/ContactCardForm'
import './App.css'
import Card from './components/Card'

function App() {
    const [list, setList] = useState(contacts)

    const createContact = (model: ContactModel) => {
        const newList = [model, ...list]
        setList(newList)
    }

    const editContact = (model: ContactModel) => {
        const newList = list.map((it) => {
            if (it.id === model.id) {
                return {
                    ...it,
                    ...model
                }
            }
            return it
        })
        setList(newList)
    }

    const deleteContact = (id: string) => {
        const newList = list.filter((it) => it.id !== id)
        setList(newList)
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
