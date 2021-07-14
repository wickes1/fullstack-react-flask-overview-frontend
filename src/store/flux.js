const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: '',
      message: null,
      data: null,
      demo: [
        {
          title: 'FIRST',
          background: 'white',
          initial: 'white',
        },
        {
          title: 'SECOND',
          background: 'white',
          initial: 'white',
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, 'green')
      },
      syncTokenFromSessionStorage: () => {
        const token = sessionStorage.getItem('token')
        console.log('App loaded, syncing session storage token')
        if (token && token !== '' && token !== undefined) setStore({ token: token })
      },
      logout: () => {
        sessionStorage.removeItem('token')
        console.log('Log out')
        setStore({ token: null })
      },

      login: async (username, password) => {
        const headers = new Headers()
        headers.set(
          'Authorization',
          'Basic ' + Buffer.from(username + ':' + password).toString('base64')
        )

        try {
          const res = await fetch('/login', {
            method: 'GET',
            headers: headers,
          })
          if (res.status !== 200) {
            alert('Login Error')
            return false
          }

          const data = await res.json()
          sessionStorage.setItem('token', data.token)
          console.log('User logged in:', data.token)
          setStore({ token: data.token })
          return true
        } catch (error) {
          console.error('Login Error')
        }
      },
      getMetrics: () => {
        const store = getStore()
        const options = {
          method: 'GET',
          headers: {
            'x-access-token': store.token,
          },
        }
        fetch('/api/metrics', options)
          .then(res => res.json())
          .then(data => {
            setStore({ data: data.res })
          })
          .catch(e => console.log(e))
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + '/api/hello')
          .then(resp => resp.json())
          .then(data => setStore({ message: data.message }))
          .catch(error => console.log('Error loading message from backend', error))
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore()

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color
          return elm
        })

        //reset the global store
        setStore({ demo: demo })
      },
    },
  }
}

export default getState
