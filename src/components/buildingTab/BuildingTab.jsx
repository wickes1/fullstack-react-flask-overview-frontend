import React from 'react'
import { Card } from 'react-bootstrap'
import './buildingTab.css'

export default function BuildingTab({ building }) {
  return (
    <div className="buildingTab">
      <Card border="light">
        <Card.Body>
          <Card.Title>{building.PropertyName}</Card.Title>
        </Card.Body>
        <Card.Text>
          <ul className="list">
            <li>{building.PrimaryPropertyType}</li>
            <li>{building.Address}</li>
            <li>{'# of floor: ' + building.NumberofFloors}</li>
            <li>{'District: ' + building.CouncilDistrictCode}</li>
            <li>{'Built in ' + building.YearBuilt}</li>
          </ul>
        </Card.Text>
      </Card>
    </div>
  )
}
