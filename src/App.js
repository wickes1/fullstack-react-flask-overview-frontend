import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import './app.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import injectContext from './store/appContext'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default injectContext(App)
