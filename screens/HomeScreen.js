import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
const HomeScreen = () => {
    return (
     <SafeAreaView style={tw`bg-white h-full`}>
            <View>
            <Text>Home</Text>
        </View>
     </SafeAreaView>
    )
}

export default HomeScreen
