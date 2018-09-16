import React from 'react'
import { Row, Col } from 'antd'
import './App.css'
import Main from './components/Main'
import Map from './components/Map'

const App = () => (
  <div className="App">
    <Row type="flex" justify="space-around" align="middle">
      <Col xs={24} md={12}>
        <Main />
      </Col>
      <Col xs={24} md={12}>
        <Map />
      </Col>
    </Row>
  </div>
)

export default App
