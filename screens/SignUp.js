import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'

const SignUp = () => {
    return (
    <View style={tw``}>
        <View style={tw`bg-[#08857C]`}>
               <View style={tw`mx-4 pt-10  `}>
               <Text style={tw`text-white text-lg font-bold my-2`}>Sign Up</Text>
               <Text style={tw`text-sm text-white`}>Enter your Hospital Details</Text>
               </View>
                <View style={tw`bg-white h-full rounded-t-[24px]`}>
                    <Text>ff</Text>
                </View>
            </View>
    </View>
    )
}

export default SignUp
