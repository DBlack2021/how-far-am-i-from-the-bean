import React from 'react'
import GoogleMapReact from 'google-map-react'
import Polyline from 'google-map-react'
import { BEAN_COORDS } from '../utils/formuoli'
import Pin from './Pin'

export default function Map({ location, zoomLevel }) {
  return (
    <div className="map" style={{ width: '500px', height: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVqQ9aFyVkLoxJmq4z8EBDJ3ahmb1C3yc' }}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
          defaultZoom={zoomLevel}
        >
          <Pin
            lat={location.lat}
            lng={location.lng}
            text={"Your Location"}
          />
          <img
            lat={BEAN_COORDS.lat}
            lng={BEAN_COORDS.lng}
            src="./bean.png"
            style={{
              width: '25px',
              height: '30px',
              position: 'absolute',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </GoogleMapReact>
    </div>
  )
}
