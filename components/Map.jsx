import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import tw from 'twrnc'
import { Marker } from "react-native-maps";

const Map = () => {
  const INITIAL_REGION = {
    latitude: 52.5,
    longitude: 19.2,
    latitudeDelta: 8.5,
    longitudeDelta: 8.5,
  };

    return (
      //   <MapView
      //   style={tw`flex-1`}
      //   initialRegion={{
      //     latitude: 37.78825,
      //     longitude: -122.4324,
      //     latitudeDelta: 0.0922,
      //     longitudeDelta: 0.0421,
      //   }}
      // />
      <MapView initialRegion={INITIAL_REGION}  style={tw`flex-1`}>
      <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />
      <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />
      <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />
      <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />
      <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />
      <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />
      <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />
      <Marker coordinate={{ latitude: 52.4, longitude: 21 }} />
      <Marker coordinate={{ latitude: 51.8, longitude: 20 }} />
    </MapView>
    )
}

export default Map
