import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import Input from "../components/Input";
import Button from "../components/Button";
import { StackActions, useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { UserContext } from "../store/userContext";
import axios from "axios";
import { BaseUrl } from "../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = () => {
  const { dispatch } = useNavigation();
  const user = useContext(UserContext);

  const [value, setValue] = useState({
    fullName: "",
    email: "",
    password: "",
    hospital: false,
  });

  const onSubmit = async () => {
    //run a check
    if (value.fullName == "") {
      return showMessage({
        message: "Fill in the fullname",
        type: "warning",
      });
    }
    if (value.email == "") {
      return showMessage({
        message: "Fill in a correct email",
        type: "warning",
      });
    }
    if (value.password == "") {
      return showMessage({
        message: "Fill in the Password",
        type: "warning",
      });
    }

    const data2 = {
      hospital_name: value.fullName,
      email: value.email,
      password: value.password,
      is_private: value.hospital,
    };

    try {
      const data = await axios.post(`${BaseUrl}/hospitals/register`, data2, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(data);
      user.userDispatch({
        type: "UPDATE-USER",
        payload: data.data.data.user,
      });
      await AsyncStorage.setItem("token", data.data.data.access_token);
      dispatch(StackActions.push("Address"));
    } catch (error) {
      console.log(error.response);
      return showMessage({
        message: "Error Occur try again",
        type: "warning",
      });
    }
  };
  const onSignIn = () => {
    dispatch(StackActions.push("SignIn"));
  };

  return (
    <View style={tw`bg-[#08857C] `}>
      <View>
        <View style={tw`mx-4 pt-10 mt-4 `}>
          <Text style={tw`text-white text-2xl  font-bold`}>Welcome</Text>
          <Text style={tw`text-white text-2xl  font-bold`}>
            Register Hospital
          </Text>
        </View>
        <View style={tw`mx-4 my-4 py-2 `}>
          <Text style={tw`text-sm  text-slate-100`}>
            Health is wealth, Help save the world
          </Text>
          <Text style={tw`text-sm  text-slate-100 `}>
            Please register an account ?
          </Text>
        </View>
      </View>

      <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
        <Input
          title="Hospital Name"
          value={value.fullName}
          onChangeText={(fullName) => {
            setValue({ ...value, fullName });
          }}
          secureTextEntry={false}
        />
        <Input
          title="Email"
          value={value.email}
          onChangeText={(email) => {
            setValue({ ...value, email });
          }}
          secureTextEntry={false}
        />

        <Input
          title="Password"
          value={value.password}
          secureTextEntry
          onChangeText={(password) => {
            setValue({ ...value, password });
          }}
        />
        <View style={tw`flex-row`}>
          <TouchableOpacity
            style={tw`h-4 w-4 ${
              value.hospital ? "bg-[#08857C]" : "bg-white"
            } rounded border`}
            onPress={() =>
              setValue((prev) => ({ ...prev, hospital: !prev.hospital }))
            }
          />
          <Text style={tw`text-gray-500 items-center ml-2 mb-2`}>
            Is hospital private?
          </Text>
        </View>
        <Button title="SIGN UP" onPress={onSubmit} />
        <View style={tw`flex-row p-4 justify-center`}>
          <Text style={tw`text-gray-500 items-center mr-2`}>
            Alreadly Have an Account ?
          </Text>
          <Text onPress={onSignIn} style={tw`text-[#08857C] font-bold`}>
            Sign-In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
