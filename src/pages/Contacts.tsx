import { useCallback, useContext, useMemo, useRef, useState } from 'react'
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
    const [deletingIds, setDeletingIds] = useState<string[]>([])
    const [sorting, setSorting] = useState<'natural' | 'ascending' | 'descending'>('natural')
    const timeoutRef = useRef<{ [id: string]: number }>({})
    const currentList = useMemo(() => {
        const newList = [...list]
        if (sorting === 'natural') {
            return newList.filter((it) => !deletingIds.includes(it.id))
        }
        return newList
            .sort((a, b) => {
                if (a.name < b.name) {
                    return sorting === 'ascending' ? -1 : 1
                }
                if (a.name > b.name) {
                    return sorting === 'ascending' ? 1 : -1
                }
                return 0
            })
            .filter((it) => !deletingIds.includes(it.id))
    }, [deletingIds, list, sorting])

    const createContact = useCallback(
        (model: ContactModel) => {
            dispatch({ type: ContactActionTypes.contacts_ADD, payload: model })
        },
        [dispatch]
    )

    const editContact = useCallback(
        (model: ContactModel) => {
            dispatch({ type: ContactActionTypes.contacts_EDIT, payload: model })
        },
        [dispatch]
    )

    const confirmDeleteContact = useCallback(
        (id: string) => {
            dispatch({ type: ContactActionTypes.contacts_REMOVE, payload: id })
            // Setter with callback here since we are in a set timeout.
            // The current state is an old one (previous render)
            setDeletingIds((deletingIds) => deletingIds.filter((it) => it !== id))
            timeoutRef.current[id] = -1
        },
        [dispatch]
    )

    const deleteContact = useCallback(
        (id: string) => {
            setDeletingIds([...deletingIds, id])
            const timeoutId = setTimeout(() => confirmDeleteContact(id), 3000)
            timeoutRef.current[id] = timeoutId
        },
        [confirmDeleteContact, deletingIds]
    )

    const undoDeletion = (id: string) => {
        const newIds = deletingIds.filter((it) => it !== id)
        setDeletingIds(newIds)
        clearTimeout(timeoutRef.current?.[id])
        timeoutRef.current[id] = -1
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
                    flexWrap: 'wrap',
                    marginTop: 8
                }}>
                {deletingIds.map((it) => (
                    <Button
                        key={it}
                        style={{ marginLeft: 8 }}
                        label={`UNDO ${it}`}
                        onClick={() => undoDeletion(it)}
                    />
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                {currentList.map((it) => {
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
