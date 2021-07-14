import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../store/appContext'

export default function Login() {
  const { store, actions } = useContext(Context)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  // const token = sessionStorage.getItem('token')

  const handleClick = () => {
    actions.login(username, password).then(() => {
      history.push('/')
    })
  }

  if (store.token && store.token !== '' && store.token !== undefined) {
    history.push('/')
  }

  // const handleClick = () => {
  //   const headers = new Headers()
  //   headers.set(
  //     'Authorization',
  //     'Basic ' + Buffer.from(username + ':' + password).toString('base64')
  //   )

  //   fetch('/login', {
  //     method: 'GET',
  //     headers: headers,
  //   })
  //     .then(res => res.json())
  //     .then(data => sessionStorage.setItem('token', data.token))
  //     .catch(error => console.error(error))
  // }

  return (
    <div className="login-form">
      {store.token && store.token !== '' && store.token !== undefined ? (
        // 'you are logged in with token:' + token
        history.push('/')
      ) : (
        <div>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              value={username}
              onChange={e => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  )
}
