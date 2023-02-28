import './App.css'

function App() {
  const name = "Pippo"
  const otherName = "Pluto"
  const toggle = false
  return (
    <div className="App">
      <div className="card">
        <button onClick={() => {}}>
          Click Me {toggle ? name : otherName}
        </button>
      </div>
    </div>
  )
}

export default App
