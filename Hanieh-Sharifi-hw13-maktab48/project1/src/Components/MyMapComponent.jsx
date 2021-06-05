import React,{useContext, useEffect, useState} from 'react'; 
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";



const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: parseInt(props.center.lat) , lng: parseInt(props.center.lon) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: parseInt(props.center.lat) , lng: parseInt(props.center.lon) }} />}
  </GoogleMap>
));

export default MyMapComponent;