import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../store/appContext'
import './login.css'

export default function Login() {
  const { store, actions } = useContext(Context)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleClick = () => {
    actions.login(username, password).then(() => {
      history.push('/')
    })
  }

  if (store.token && store.token !== '' && store.token !== undefined) {
    history.push('/')
  }

  return (
    <div className="loginPage">
      {store.token && store.token !== '' && store.token !== undefined ? (
        // 'you are logged in with token:' + token
        history.push('/')
      ) : (
        <div className="form">
          <h2 className="formTitle">Sign In</h2>
          <div className="formItem">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              value={username}
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="formItem">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button className="submitButton" onClick={handleClick}>
            Login
          </button>
        </div>
      )}
    </div>
  )
}
