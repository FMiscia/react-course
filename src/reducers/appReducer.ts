export type AppState = {
    savedProducts: number[]
    loggedIn: boolean
}

export enum AppActionTypes {
    'user_LOGIN',
    'user_LOGOUT',
    'products_SAVE',
    'products_REMOVE'
}

export type AppAction = {
    type: AppActionTypes
    payload?: number
}

const appReducer = (state: AppState, action: AppAction): AppState => {
    const { type, payload } = action
    switch (type) {
        case AppActionTypes.user_LOGIN: {
            return { ...state, loggedIn: true }
        }
        case AppActionTypes.user_LOGOUT: {
            return { ...state, loggedIn: false }
        }
        case AppActionTypes.products_SAVE: {
            if (!payload) {
                return state
            }
            const savedProducts = [payload, ...state.savedProducts]
            return { ...state, savedProducts }
        }
        case AppActionTypes.products_REMOVE: {
            if (!payload) {
                return state
            }
            const savedProducts = state.savedProducts.filter((it) => it !== payload)
            return { ...state, savedProducts }
        }
    }
}

export default appReducer
