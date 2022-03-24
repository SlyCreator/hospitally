import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const SignUp = () => {
    return (
        <SafeAreaView >
            <View style={tw`bg-[#08857C]`}>
               <View style={tw`mx-4 pt-8 `}>
               <Text style={tw`text-white text-lg font-bold`}>Sign Up</Text>
               <Text>Enter your Hospital Details</Text>
               </View>
                <View style={tw`bg-white h-full rounded-lg`}>
                    <Text>ff</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUp
