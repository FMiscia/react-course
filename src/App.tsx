import React from 'react'
import Contacts from './pages/Contacts'
import './App.css'

export const AppNumberContext = React.createContext(5)

function App() {
    
    return (
        <AppNumberContext.Provider value={111}>
            <div className="App">
                <Contacts />
            </div>
        </AppNumberContext.Provider>
    )
}

export default App
