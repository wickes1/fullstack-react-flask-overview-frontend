import React, { useContext } from 'react'
import { Context } from '../../store/appContext'
import './home.css'

export default function Home() {
  const { store, actions } = useContext(Context)
  return (
    <div className="home">
      <h1 className="title">This is the homepage</h1>
      <p className="body">
        login for viewing the other tabs <br />
        Username: admin <br />
        Password: 123456
      </p>
      {/* <button onClick={() => actions.getBuildingOverview({ page: 1, per_page: 5 })}>
        Retreive Data
      </button>
      <p>login before you click the button</p>
      <div>
        {store.buildingOverview ? (
          <div>
            <pre>{JSON.stringify(store.buildingOverview, null, 2)}</pre>
            <pre>{JSON.stringify(store.buildingPagination, null, 2)}</pre>
          </div>
        ) : null}
      </div> */}
    </div>
  )
}
