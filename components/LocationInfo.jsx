import React, { useState, useEffect } from 'react'
import { getBeanDistance } from '../utils/formuoli'

export default function LocationInfo({ lng, lat, name }) {
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Beaming To The Bean From: {name} </h3>
      <p style={{textAlign: 'center'}}>🎉 Distance To The Bean: <b>≈{Math.round(getBeanDistance({lng, lat}))} miles</b>🎉</p>
    </div>
  )
}
