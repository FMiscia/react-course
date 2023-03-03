import Contacts from './pages/Contacts'
import './App.css'
import ContactsProvider from './context/ContactsProvider'

function App() {
    return (
        <ContactsProvider>
            <Contacts />
        </ContactsProvider>
    )
}

export default App
