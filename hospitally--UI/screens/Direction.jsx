import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { useRoute } from "@react-navigation/core";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import tw from "twrnc";

const Direction = () => {
  const { location, direction } = useRoute().params;
  const mapRef = useRef();
  const markerRef = useRef();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={tw`flex-1`}
        ref={mapRef}
        region={{
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lng),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lng),
          }}
          ref={markerRef}
        />
        <Marker
          coordinate={{
            latitude: parseFloat(direction.address_latitude),
            longitude: parseFloat(direction.address_longitude),
          }}
        />
        <MapViewDirections
          origin={{
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lng),
          }}
          destination={{
            latitude: parseFloat(direction.address_latitude),
            longitude: parseFloat(direction.address_longitude),
          }}
          apikey="AIzaSyCGPY_hsHcarYRmtuyvZCTOyoRWGN7-JGA"
          strokeColor="red"
          strokeWidth={3}
          optimizeWaypoints={true}
          // onStart={params => {}}
          onReady={(result) => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
          onError={(errorMessage) => {}}
        />
      </MapView>
    </View>
  );
};

export default Direction;

const styles = StyleSheet.create({});
