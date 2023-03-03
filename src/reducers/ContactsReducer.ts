import { ContactModel } from '../types'

export type ContactsReducerAction = {
    type: 'contacts/ADD' | 'contacts/EDIT' | 'contacts/REMOVE'
    payload: string | ContactModel
}

const contactsReducer = (state: ContactModel[], action: ContactsReducerAction): ContactModel[] => {
    const type = action.type
    const payload = action.payload
    switch (type) {
        case 'contacts/ADD': {
            const newElement = payload as ContactModel
            return [newElement, ...state]
        }
        case 'contacts/EDIT': {
            const item = payload as ContactModel
            const newList = state.map((it) => {
                if (it.id === item.id) {
                    return {
                        ...it,
                        ...item
                    }
                }
                return it
            })

            return newList
        }
        case 'contacts/REMOVE': {
            const newList = state.filter((it) => it.id !== payload)
            return newList
        }
    }
}

export default contactsReducer
