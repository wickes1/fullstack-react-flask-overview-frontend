import React, { useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'

export default function Home() {
  const { store, actions } = useContext(Context)
  console.log(store.buildingPagination)
  useEffect(() => {
    return () => {}
  }, [])
  return (
    <div>
      <h1>This is the homepage</h1>
      {/* <button onClick={() => actions.getBuildingOverview({ page: 1, per_page: 5 })}>
        Retreive Data
      </button> */}
      <p>login before you click the button</p>
      <div>
        {/* {store.buildingOverview ? (
          <div>
            <pre>{JSON.stringify(store.buildingOverview, null, 2)}</pre>
            <pre>{JSON.stringify(store.buildingPagination, null, 2)}</pre>
          </div>
        ) : null} */}
      </div>
    </div>
  )
}
