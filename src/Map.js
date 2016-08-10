import React from "react";
import { GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 *
 * We use React 0.14 stateless function components here.
 * https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
 */
const Map = props => (
    
  <section style={{
       height: `100%` }}
       >
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `500px`,
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={13}
          defaultCenter={{ lat: 57.713108, lng: 11.974968 }}
          onClick={props.onMapClick}
        >
          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
  
);

export default Map;
