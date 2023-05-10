import React, { PropsWithChildren, useReducer } from 'react'
import appReducer, { AppAction, AppState } from '../reducers/appReducer'

export const AppReducerStateContext = React.createContext<AppState>({
    savedProducts: [],
    loggedIn: false
})
export const AppReducerDispatchContext = React.createContext<React.Dispatch<AppAction>>(() => null)

function AppReducerContextProvider({ children }: PropsWithChildren) {
    const [appState, dispatch] = useReducer(appReducer, { savedProducts: [], loggedIn: false })

    return (
        <AppReducerStateContext.Provider value={appState}>
            <AppReducerDispatchContext.Provider value={dispatch}>
                {children}
            </AppReducerDispatchContext.Provider>
        </AppReducerStateContext.Provider>
    )
}

export default AppReducerContextProvider
