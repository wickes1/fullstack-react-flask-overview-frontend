import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'

export default function Home() {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    return () => {}
  }, [])
  return (
    <div>
      <button onClick={() => actions.getMetrics()}>Retreive Data</button>

      <div>
        {store.data ? <h6>{JSON.stringify(store.data)}</h6> : null}

        {/* <pre>{JSON.stringify(store.data, null, 2)}</pre> */}
      </div>
    </div>
  )
}
