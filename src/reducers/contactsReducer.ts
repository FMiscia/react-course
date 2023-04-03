import { ContactModel } from "../types"

export enum ContactActionTypes {
    'contacts_ADD',
    'contacts_EDIT',
    'contacts_REMOVE'
}

export type ContactsAction = {
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

export default contactsReducer