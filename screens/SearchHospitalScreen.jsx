import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import tw from 'twrnc'
import { MaterialIcons } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native'
import Map from '../components/Map'
const SearchHospitalScreen = () => {

    const { dispatch } = useNavigation();
    const onTap = () => {
        dispatch(StackActions.push('Map'))
    }
    return (
        <View style={tw`flex-1 bg-white px-6 py-4 justify-between`}>
            <Input title="What is your address" />

            <TouchableOpacity onPress={onTap}>
                <View style={tw`  items-center `}>
                    <MaterialIcons name="add-location-alt" size={60} color="#08857C" />
                    <Text style={tw`text-base font-bold p-2`}>Use G.P.S</Text>
                    <Text style={tw`text-sm text-gray-500`}>Tap to use current location</Text>
                </View>
            </TouchableOpacity>

            <View style={tw``}>
                <Text style={tw`text-base pb-2 font-bold text-gray-700`}>Hospital Near You</Text>
                <View style={tw`h-70 rounded-lg`}>
                    <Map />
                </View>
            </View>
        </View>
    )
}

export default SearchHospitalScreen
