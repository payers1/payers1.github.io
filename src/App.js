import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { Row, Col } from 'antd'
import { delay } from 'bluebird'
import './App.css'
import Main from './components/Main'

const MAPSTYLE = 'mapbox://styles/mapbox/dark-v9'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: window.innerWidth / 2,
        height: window.innerHeight,
        latitude: 43.15003802563228,
        longitude: -77.58613866914878,
        zoom: 5
      }
    }
    this.map = React.createRef()
  }

  componentDidMount() {
    const map = this.map.current.getMap()
    map.on('load', async () => {
      await delay(1500)
      this.setState({
        viewport: {
          ...this.state.viewport,
          zoom: 13,
          transitionDuration: 20000
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={24} md={12}>
            <Main />
          </Col>
          <Col xs={24} md={12}>
            <ReactMapGL
              {...this.state.viewport}
              ref={this.map}
              reuseMaps={true}
              mapStyle={MAPSTYLE}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onViewportChange={viewport => this.setState({ viewport })}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
