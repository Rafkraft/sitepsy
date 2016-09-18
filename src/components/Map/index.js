import { default as React, Component } from "react";

import { default as canUseDOM } from "can-use-dom";

import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";

export default class extends Component {

  state = {
    markers: [{
      position: {
        lat: 43.578425,
        lng: 1.272752,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }],
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }
  }

  render() {
    let zoomLevel = 11;
    if (canUseDOM) {
      zoomLevel = window.matchMedia('(min-width: 768px)').matches ? 12 : zoomLevel;
    }

    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: `100%`,
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={zoomLevel}
            defaultOptions={{
              scrollwheel: false,
              draggable: false
            }}
            defaultCenter={{ lat: 43.582900, lng: 1.346}}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}