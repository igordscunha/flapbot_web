import { BrowserRouter as Router } from 'react-router'
import { AppRoutes } from './routes/AppRoutes'
import { HeaderComponent } from './components/header/HeaderComponent'
import { FooterComponent } from './components/footer/FooterComponent'

function App() {
  return (
    <>
      <Router>
        <HeaderComponent/>
        <AppRoutes/>
        <FooterComponent/>
      </Router>
    </>
  )
}

export default App
