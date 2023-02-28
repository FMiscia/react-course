import './App.css'

function App() {
    const contacts = ["Alessandro", "Luca", "Paolo", "Mario"]
    return (
        <div className="App">
            {contacts.map((it) => (
                <div className="card">
                    <h3>{it}</h3>
                    <button onClick={() => {}}>Click Me</button>
                </div>
            ))}
        </div>
    )
}

export default App
