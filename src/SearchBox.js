import { compose, withProps, lifecycle } from "recompose";
import React from 'react';
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";

export const PlacesWithStandaloneSearchBox =  compose(
    withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />
    }),
    lifecycle({
        componentWillMount() {
            const refs = {}

            this.setState({
                places: [],
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref;
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces();
                    debugger;
                    refs.searchBox.props.callBack(places);
                    this.setState({
                        places,
                    });
                },
            })
        },
    })
)(props =>
    <div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            onPlacesChanged={props.onPlacesChanged}
            callBack={props.placesChanged}
        >
            <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                }}
            />
        </StandaloneSearchBox>
        <ol>
            {props.places.map(({ place_id, formatted_address, geometry: { location } }) =>
                <li key={place_id}>
                    {formatted_address}
                    {" at "}
                    ({location.lat()}, {location.lng()})
        </li>
            )}
        </ol>
    </div>
);