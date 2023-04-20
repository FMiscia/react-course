import { useContext, useState } from 'react'
import ContactCard from '../components/ContactCard'
import { ContactModel } from '../types'
import ContactCardForm from '../components/forms/ContactCardForm'
import Card from '../components/Card'
import { ContactActionTypes } from '../reducers/contactsReducer'
import { ContactsDispatchContext, ContactsStoreContext } from '../contexts/ContactsContext'
import useIsOnline from '../hooks/useIsOnline'
import Button from '../components/Button'

function Contacts() {
    const list = useContext(ContactsStoreContext)
    const dispatch = useContext(ContactsDispatchContext)
    const isOnline = useIsOnline()
    const [sorting, setSorting] = useState<'natural' | 'ascending' | 'descending'>('natural')
    const [count, setCount] = useState(0)
    const currentList = () => {
        console.log('computing')
        const newList = [...list]
        if (sorting === 'natural') {
            return newList
        }
        return newList.sort((a, b) => {
            if (a.name < b.name) {
                return sorting === 'ascending' ? -1 : 1
            }
            if (a.name > b.name) {
                return sorting === 'ascending' ? 1 : -1
            }
            return 0
        })
    }

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
            <Button
                style={{ marginLeft: 8 }}
                label={`INCREASE COUNT: ${count}`}
                onClick={() => setCount(count + 1)}
            />
            <Card>
                <ContactCardForm onSubmit={createContact} disabled={!isOnline} />
            </Card>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 8
                }}>
                <Button
                    style={{ marginLeft: 8 }}
                    label={'NATURAL'}
                    secondary={sorting !== 'natural'}
                    onClick={() => setSorting('natural')}
                />
                <Button
                    style={{ marginLeft: 8 }}
                    label={'A-Z'}
                    secondary={sorting !== 'ascending'}
                    onClick={() => setSorting('ascending')}
                />
                <Button
                    style={{ marginLeft: 8 }}
                    label={'Z-A'}
                    secondary={sorting !== 'descending'}
                    onClick={() => setSorting('descending')}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                {currentList().map((it) => {
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
