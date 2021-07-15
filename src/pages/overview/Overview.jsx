import React, { useContext } from 'react'
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import { Context } from '../../store/appContext'
import './overview.css'

export default function Overview() {
  const { store, actions } = useContext(Context)
  console.log(store.buildingOverview)
  const handleSelect = eventKey => {
    switch (eventKey) {
      case 0:
        break
      case 1:
        break
      case 2:
        break

      default:
        break
    }
  }
  return (
    <div className="overview">
      <Tab.Container defaultActiveKey={0} onSelect={handleSelect}>
        <Row>
          <Col className="leftCard">
            <Tab.Content>
              <Tab.Pane eventKey={0}>{store.buildingOverview.Address}</Tab.Pane>
              <Tab.Pane eventKey={1}>{store.buildingOverview.Address}</Tab.Pane>
              <Tab.Pane eventKey={2}>{store.buildingOverview.Address}</Tab.Pane>
              <Tab.Pane eventKey={3}>{store.buildingOverview.Address}</Tab.Pane>
              <Tab.Pane eventKey={4}>{store.buildingOverview.Address}</Tab.Pane>
            </Tab.Content>
          </Col>

          <Col className="rightCard">
            <ListGroup>
              <ListGroup.Item action eventKey={0}>
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action eventKey={1}>
                Link 2
              </ListGroup.Item>
              <ListGroup.Item action eventKey={2}>
                Link 3
              </ListGroup.Item>
              <ListGroup.Item action eventKey={3}>
                Link 4
              </ListGroup.Item>
              <ListGroup.Item action eventKey={4}>
                Link 5
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}
