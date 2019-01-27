import React, { useReducer } from 'react'
import ReactMapGL, { HTMLOverlay } from 'react-map-gl'
import LocationOverlay from './LocationOverlay'

const MAPSTYLE = 'mapbox://styles/mapbox/dark-v9'

const initialState = {
  viewport: {
    width: window.innerWidth / 2,
    height: window.innerHeight,
    latitude: 43.15003802563228,
    longitude: -77.58613866914878,
    zoom: 5
  }
}

function Map({ showOverLay }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  return (
    <ReactMapGL
      {...state.viewport}
      reuseMaps={true}
      mapStyle={MAPSTYLE}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={viewport => setState({ viewport })}
    >
      {showOverLay && <HTMLOverlay redraw={props => <LocationOverlay />} />}
    </ReactMapGL>
  )
}

export default Map
