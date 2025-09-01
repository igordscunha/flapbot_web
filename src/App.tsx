import { BrowserRouter as Router } from 'react-router'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <>
      <Router>
        {/* NavBar forever aqui */}
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
