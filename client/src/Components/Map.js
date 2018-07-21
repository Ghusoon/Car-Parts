import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import {Container} from 'reactstrap';



class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 29.085942, lng: -82.074571 } }
        defaultZoom = { 13 }
      >
        <Marker position={{ lat: 29.085942, lng:-82.074571 }} />
      </GoogleMap>
   ));
   
   return(
      <div>
     
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%`, width: '100%' }} /> }
        />
      
      </div>
   );
   }
};
export default Map;