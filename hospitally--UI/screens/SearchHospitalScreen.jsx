import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Button from "../components/Button";
import Map from "../components/Map";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { showMessage } from "react-native-flash-message";
import { BaseUrl } from "../constants/constants";
import axios from "axios";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
const SearchHospitalScreen = () => {
  const [details, setDetails] = useState(null);
  const [marker, setMarker] = useState([]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude.toFixed(2),
        lng: location.coords.longitude.toFixed(2),
      });
    })();
  }, []);

  const search = async () => {
    if (details === null) {
      return showMessage({
        message: "Enter a location",
        type: "warning",
      });
    }

    try {
      const data = await axios.get(
        `${BaseUrl}/hospitals/search-nearby?address_latitude=${details.lat}&address_longitude=${details.lng}`
      );
      console.log(data);
      setMarker(data.data.data);
    } catch (error) {
      console.log(error.response);
      return showMessage({
        message: "No hospital in this region",
        type: "warning",
      });
    }
  };

  const onTap = async () => {
    console.log(location);
    console.log(details)
    setMarker([])
    try {
      const data = await axios.get(
        `${BaseUrl}/hospitals/search-nearby?address_latitude=${6.87}&address_longitude=${location.lng}`
      );
      console.log(data);
      setMarker(data.data.data);
    } catch (error) {
      // console.log(error.response);
      return showMessage({
        message: "No hospital in this region",
        type: "warning",
      });
    }
  };
  return (
    <View style={tw`flex-1 bg-white px-6 py-4`}>
      <Text style={tw`text-base font-bold p-2`}>
        Enter address to get hospitals close by
      </Text>
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: {
            width: "100%",
            color: "black",
            marginTop: 10,
            borderWidth: 0.5,
            borderRadius: 10,
          },
          textInput: {
            width: "100%",
            backgroundColor: "transparent",
          },
          container: {
            flex: 0,
          },
        }}
        debounce={400}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        placeholder=""
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
          setDetails({
            lat: details.geometry.location.lat.toFixed(2),
            lng: details.geometry.location.lng.toFixed(2),
          });
        }}
        query={{
          key: "AIzaSyBQzHezofohpG5bfvamKeZxnE9cUX4xLu0",
          language: "en",
          components: "country:ng",
        }}
      />
      <Button title="Search" onPress={search} style="mt-10" />

      <TouchableOpacity onPress={onTap} style={tw`mt-5`}>
        <View style={tw`  items-center `}>
          <MaterialIcons name="add-location-alt" size={60} color="#08857C" />
          <Text style={tw`text-base font-bold p-2`}>Use G.P.S</Text>
          <Text style={tw`text-sm text-gray-500`}>
            Tap to use current location
          </Text>
        </View>
      </TouchableOpacity>

      {marker.length > 0 ? (
        <View style={tw``}>
          <Text style={tw`text-base pb-2 font-bold text-gray-700 mt-5`}>
            Hospital Near You
          </Text>
          <View style={tw`h-100 rounded-lg`}>
            <Map marker={marker} location={location}/>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default SearchHospitalScreen;
