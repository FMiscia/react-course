import './App.css'
import { contacts } from '../db'

function App() {
    return (
        <div className="App">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {contacts.map((it) => (
                    <div className="card">
                        <h3>{it.name}</h3>
                        <p>{it.email}</p>
                        <p>{it.phone}</p>
                        <p>{it.notes}</p>
                        <button onClick={() => {}}>Click Me</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
