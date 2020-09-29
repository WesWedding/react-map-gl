// @flow
import type MapboxGL from 'mapbox-gl/src/index';

const isBrowser: boolean = true

// $FlowFixMe
const mapboxgl: MapboxGL = isBrowser ? require('mapbox-gl') : require('mapbox-gl');

export default mapboxgl;
