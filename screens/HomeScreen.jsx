import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
const HomeScreen = () => {
    return (
        <View>
            <View style={tw`bg-[#08857C] `}>
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-2xl  font-bold`}>Welcome to</Text>
                    <Text style={tw`text-white text-2xl  font-bold`}>Hospitally</Text>
                </View>
                <View style={tw`mx-4 my-4 py-2 `}>
                    <Text style={tw`text-sm  text-slate-100`}>Health is wealth , Never get stranded</Text>
                    <Text style={tw`text-sm  text-slate-100 `}>Search for Hospital closeby</Text>

                </View>
            </View>
        </View>
    )
}

export default HomeScreen
