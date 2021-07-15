import React, { useContext, useState, useEffect } from 'react'
import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import BuildingTab from '../../components/buildingTab/BuildingTab'
import { Context } from '../../store/appContext'
import ReactPaginate from 'react-paginate'
import './overview.css'

export default function Overview() {
  const { store, actions } = useContext(Context)
  const [pageNumber, setPageNumber] = useState(0)
  const handleSelect = eventKey => {}
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  useEffect(() => {
    actions.getBuildingOverview({ page: pageNumber + 1, per_page: 15 })
    return () => {}
  }, [pageNumber])
  return store.buildingOverview ? (
    <div className="overview">
      <Tab.Container defaultActiveKey={0} onSelect={handleSelect}>
        <Row>
          <Col className="leftCard">
            <Tab.Content>
              {store.buildingOverview.map(building => {
                return (
                  <Tab.Pane action eventKey={building.OSEBuildingID}>
                    <BuildingTab building={building} key={building.OSEBuildingID} />
                  </Tab.Pane>
                )
              })}
            </Tab.Content>
          </Col>

          <Col className="rightCard">
            <ListGroup>
              {store.buildingOverview.map(building => {
                return (
                  <ListGroup.Item action eventKey={building.OSEBuildingID}>
                    {building.PropertyName}
                  </ListGroup.Item>
                )
              })}

              <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={Math.ceil(store.buildingPageSize / 15)}
                onPageChange={changePage}
                initialPage={0}
                containerClassName="paginationButtons"
                previousLinkClassName="previousButton link"
                nextLinkClassName="nextButton link"
                disabledClassName="paginationDisabled"
                activeClassName="paginationActive"
              />
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  ) : null
}
