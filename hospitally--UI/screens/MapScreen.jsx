import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-full`}>
                <Map />
            </View>
        </View>
    )
}

export default MapScreen
