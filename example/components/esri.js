import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../src'
import esri from 'esri-leaflet'

export default class EsriExample extends Component {
  constructor () {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map 
        center={position} 
        zoom={this.state.zoom}
        ref='map'>
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }

  componentDidMount () {
    esri.basemapLayer("Streets").addTo(this.refs.map.leafletElement)
  }
}
