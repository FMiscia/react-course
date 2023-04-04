import Contacts from './pages/Contacts'
import './App.css'
import ContactsContextProvider from './contexts/ContactsContext'


function App() {
    return (
        <ContactsContextProvider>
            <div className="App">
                <Contacts />
            </div>
        </ContactsContextProvider>
    )
}

export default App
