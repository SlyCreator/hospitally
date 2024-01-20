import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Input from "../components/Input";
import Button from "../components/Button";
import { StackActions, useNavigation } from "@react-navigation/native";
import { AuthService } from "../services/AuthService";
import { showMessage } from "react-native-flash-message";
import { UserContext } from "../store/userContext";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";
import { BaseUrl } from "../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddAddressScreen = () => {
  const { dispatch } = useNavigation();
  const user = useContext(UserContext);
  const [form, setForm] = useState({
    state: "",
    lat: "",
    lng: "",
    address: "",
  });
  const onSave = async () => {
    if (form.state == "") {
      return showMessage({
        message: "Fill in the state",
        type: "warning",
      });
    }

    const data2 = {
      address: form.address,
      state: form.state,
      address_latitude: form.lat.toString(),
      address_longitude: form.lng.toString(),
    };

    try {
      const token = await AsyncStorage.getItem("token")
      console.log(token)
      const data = await axios.patch(`${BaseUrl}/hospitals`, data2, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
      });
      console.log(data);
      user.userDispatch({
        type: "UPDATE-USER",
        payload: data.data.data,
      });
      dispatch(StackActions.push("Profile"));
    } catch (error) {
      console.log(error.response)
      return showMessage({
        message: "Error Occur try again",
        type: "warning",
      });
    }
  };

  console.log(form);

  return (
    <View style={tw`bg-white flex-1 p-4`}>
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: {
            width: "100%",
            color: "black",
            marginTop: 10,
            marginBottom: 20,
            borderWidth: 0.5,
          },
          textInput: {
            width: "100%",
            flex: 1,
            backgroundColor: "transparent",
          },
        }}
        debounce={400}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        placeholder="Where is your business located"
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
          setForm((prev) => ({
            ...prev,
            address: data.description,
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            state: details.address_components.filter(
              (a) => a.types[0] === "administrative_area_level_1"
            )[0]?.long_name,
          }));
        }}
        query={{
          key: "AIzaSyBQzHezofohpG5bfvamKeZxnE9cUX4xLu0",
          language: "en",
          components: "country:ng",
        }}
      />

      <Button title="Save Address" onPress={onSave} />
    </View>
  );
};

export default AddAddressScreen;
