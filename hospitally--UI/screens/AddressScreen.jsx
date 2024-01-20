import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";

const AddressScreen = () => {
  const { dispatch } = useNavigation();
  const onTap = () => {
    dispatch(StackActions.push("AddAddress"));
  };
  return (
    <View style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity onPress={onTap}>
          <View style={tw` justify-center items-center mt-20 pt-30`}>
            <MaterialIcons name="add-location-alt" size={60} color="#08857C" />
            <Text style={tw`text-base font-bold p-2`}>Add Address</Text>
            <Text style={tw`text-sm text-gray-500`}>
              Tap to add Hospital Address
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressScreen;
