import React, { useState, useEffect } from 'react'
import { getBeanDistance } from '../utils/formuoli'
import LocationInfo from './LocationInfo'
import LocationSearcher from './LocationSearcher'
import Map from './Map'

export default function TemplateComponent() {
  const [loc, setLoc] = useState({
    address: "",
    lat: 0,
    lng: 0
  })

  const [geolocate, setGeolocate] = useState(false)

  useEffect(() => {
    //get user location w/ perms
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc({address:"Your Location", lat: position.coords.latitude, lng: position.coords.longitude});
    });
    setGeolocate(true);
  }, [])

  const resetGeo = () => {
    if(!geolocate) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLoc({address:"Your Location", lat: position.coords.latitude, lng: position.coords.longitude});
      });
    }

    setGeolocate(!geolocate);
  }

  return (
    <div>
      { (!geolocate || !(loc.lat && loc.lat) ) &&
        <LocationSearcher setLoc={setLoc} />
      }

      {(loc.lat && loc.lng) ?
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ padding: '25px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <LocationInfo lng={loc.lng} lat={loc.lat} name={loc.address} />
            <button style={{width: '50%'}} onClick={resetGeo}>🌎 Toggle Geolocation</button>
          </div>
          <Map location={loc} zoomLevel={5} />
        </div>
        :
        ""
      }      
    </div>
  )
}
