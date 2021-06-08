import React, {useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaG9uaXNoIiwiYSI6ImNrcG55MDVwbzAxMmQzMm5uNWdmeG8xY3EifQ.69Z2PoCfbWFoIi_HTaoFYA';

function  MyMapComponent({long,latit})
{
  const mapContainer = useRef(null);
  const map = useRef(null);
  const LNG = long;
  const LAT = latit;
  const ZOOM = 6;

  useEffect(() => {
    if (map.current) return;
    if (long&&latit)
    {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [LNG, LAT],
        zoom: ZOOM
        });
    }
    });


    return (
      <>
        <div style={{height:"400px",width:"100%"}} ref={mapContainer} className="map-container" />
      </>
    );

}


export default MyMapComponent;