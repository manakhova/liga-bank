
import React from 'react';
import GoogleMapReact from 'google-map-react';
import {coords} from '../const';


const Pin = () => 
  <svg className="map__pin" width="30" height="35">
    <use xlinkHref="#pin"></use>
  </svg>;

const Map = () => {
  const defaultProps = {
    center: {lat:	56.833332, lng: 60.583332},
    zoom: 5
  };

  return (
    <div className="map">
      <h2 className="map__title title">Отделения Лига Банка</h2>
      <div className="map__container">
        <GoogleMapReact  id="map"
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
            {coords.map((pin, i) => <Pin lat={pin.lat} lng={pin.lng} key={i}/>)}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map;