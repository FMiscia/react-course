import './App.css'
import { contacts } from '../db'
import ContactCard from './components/ContactCard'

function App() {
    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {contacts.map((it) => (
                    <ContactCard key={it.id} {...it} />
                ))}
            </div>
        </div>
    )
}

export default App
