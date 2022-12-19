import React from "react";
import MapView from "react-native-maps";
import tw from "twrnc";
import { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/core";

const Map = ({ marker, location }) => {
  const navigation = useNavigation();
  const INITIAL_REGION = {
    latitude: parseFloat(parseFloat(marker[0].address_latitude).toFixed(2)),
    longitude: parseFloat(parseFloat(marker[0].address_longitude).toFixed(2)),
    latitudeDelta: 0.98,
    longitudeDelta: 1.9,
  };

  return (
    <MapView initialRegion={INITIAL_REGION} style={tw`flex-1`}>
      {marker.map((t, i) => (
        <Marker
          key={i}
          coordinate={{
            latitude: parseFloat(t.address_latitude),
            longitude: parseFloat(t.address_longitude),
          }}
          title={t.hospital_name}
          description={t.address}
          onCalloutPress={() =>
            navigation.navigate("Direction", {
              location,
              direction: t,
            })
          }
        />
      ))}
    </MapView>
  );
};

export default Map;
