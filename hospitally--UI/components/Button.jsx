import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={tw`bg-[#08857C] p-3 rounded-xl ${props.style}`}
      >
        <Text style={tw`text-white text-sm text-center`}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
