import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
import MapPointer from './MapPointer'
 
class Map extends Component {
  state = {
    center: {
      lat: 10.4258816,
      lng: 19.931878399999995
    },
    zoom: 11
  };
 
getLocation = () => {
  navigator.geolocation.getCurrentPosition(data => {
    this.setState({
      center:{
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      },
      zoom:15
    })
    console.table(`${this.state.center.lat},${this.state.center.lng}`)
  });
}


getMapOptions = (maps) => {

  return {
      streetViewControl: false,
      scaleControl: true,
      fullscreenControl: false,
      styles: [{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [{
              visibility: "off"
          }]
      }],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
      minZoom: 5,
      maxZoom: 38,

      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.BOTTOM_CENTER,
          mapTypeIds: [
              maps.MapTypeId.ROADMAP,
              maps.MapTypeId.SATELLITE,
              maps.MapTypeId.HYBRID
          ]
      },

      zoomControl: true,
      clickableIcons: false
  };
}



  render() {
    this.getLocation();
  

    return (
     
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
            key: 'AIzaSyDSqofc16cZv17m7RZI30gkkLes92oQOHQ',
          }}
          options={this.getMapOptions}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MapPointer
            lat={this.state.center.lat}
            lng={this.state.center.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;