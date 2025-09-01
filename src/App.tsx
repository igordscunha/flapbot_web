import { BrowserRouter as Router } from 'react-router'
import { AppRoutes } from './routes/AppRoutes'
import { Header } from './components/header/HeaderComponent'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
