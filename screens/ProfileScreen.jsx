import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Button from '../components/Button'
import { StackActions, useNavigation } from '@react-navigation/core'
import { Entypo } from '@expo/vector-icons';

const ProfileScreen = () => {
    const { dispatch } = useNavigation();
    const onSave = () => {
        dispatch(StackActions.push('Profile'))
    }
    return (
        <View style={tw`flex-1 bg-[#F7F8FA] `}>
            <View style={tw`mx-4 my-4`}>
                <View style={tw`bg-white justify-center py-12 mx-20 mt-4`}></View>
                <Text style={tw`text-base text-center py-2`}>Madonna Hospital</Text>
                <View style={tw`flex-row items-center justify-center`}>
                    <Entypo name="star" size={15} color="black" style={tw`text-center pr-1`} />
                    <Text>4.6</Text>
                </View>

                <View style={tw`bg-white p-4  my-4 rounded-lg `}>
                    <Text style={tw`text-base`}>Private Hospital</Text>
                </View>

                <View style={tw`bg-white p-4  mb-4 rounded-lg `}>
                    <Text style={tw`text-base`}>No 1,University Road</Text>
                </View>
                <View style={tw`bg-white p-4  mb-4 rounded-lg `}>
                    <Text style={tw`text-base`}>Nsukka</Text>
                </View>
                <View style={tw`bg-white p-4  mb-4 rounded-lg `}>
                    <Text style={tw`text-base`}>Enugu</Text>
                </View>

                <Button
                    title="Edit Profile"
                    onPress={onSave}
                />
            </View>
        </View>
    )
}

export default ProfileScreen
