import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'

export default function Home() {
  const { store, actions } = useContext(Context)

  useEffect(() => {
    return () => {}
  }, [])
  return (
    <div>
      <h1>This is the homepage</h1>
      <button onClick={() => actions.getBuildingOverview({ page: 1, per_page: 3 })}>
        Retreive Data
      </button>
      <div>
        {store.buildingOverview ? (
          <pre>{JSON.stringify(store.buildingOverview, null, 2)}</pre>
        ) : null}
      </div>
    </div>
  )
}
