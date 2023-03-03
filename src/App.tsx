import Contacts from './pages/Contacts'
import './App.css'
import React from 'react'

export const SimpleContext = React.createContext(1)

function App() {
    return (
        <SimpleContext.Provider value={1}>
            <div>
                <Contacts />
            </div>
        </SimpleContext.Provider>
    )
}

export default App
