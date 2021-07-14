import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import injectContext from './store/appContext'
import { Topbar } from './components/topbar/Topbar'
import Charts from './pages/charts/Charts'
import Overview from './pages/overview/Overview'
function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/overview">
          <Overview />
        </Route>
        <Route exact path="/charts">
          <Charts />
        </Route>
      </Switch>
    </Router>
  )
}

export default injectContext(App)
