import React, { Component } from 'react'
import ReactMapGL, { HTMLOverlay } from 'react-map-gl'
import { delay } from 'bluebird'
import LocationOverlay from './LocationOverlay'

const MAPSTYLE = 'mapbox://styles/mapbox/dark-v9'

class Map extends Component {
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
      // await delay(1500)
      // this.setState({
      //   viewport: {
      //     ...this.state.viewport,
      //     zoom: 13,
      //     transitionDuration: 20000
      //   }
      // })
    })
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        ref={this.map}
        reuseMaps={true}
        mapStyle={MAPSTYLE}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <HTMLOverlay redraw={props => <LocationOverlay />} />
      </ReactMapGL>
    )
  }
}

export default Map
