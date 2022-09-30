import Router from '@/route/index'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  )
}

export default App
