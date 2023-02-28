import './App.css'

function App() {
  const toggle = false
  return (
      <div className="App">
          {toggle ? (
              <div className="card">
                  <button onClick={() => {}}>Button 0</button>
              </div>
          ) : (
              <div className="card">
                  <button onClick={() => {}}>Button 0</button>
              </div>
          )}
      </div>
  )
}

export default App
