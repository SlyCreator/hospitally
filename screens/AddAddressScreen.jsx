import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button'
import { StackActions, useNavigation } from '@react-navigation/core'


const AddAddressScreen = () => {
    const { dispatch } = useNavigation();
    const onSave = () => {
        dispatch(StackActions.push('Profile'))
    }

    return (
        <View style={tw`bg-white flex-1 p-4`}>

            <Input title="State" />
            <Input title="City" />
            <Input title="L.G.A.  e.g Nsukka" />
            <Input title="Street" />

            <Button
                title="Save Address"
                onPress={onSave}
            />
        </View>
    )
}

export default AddAddressScreen
