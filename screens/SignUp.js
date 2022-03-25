import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Input from '../components/Input'

const SignUp = () => {
    return (
        <View>
            <View style={tw`bg-[#08857C] `}>
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-lg font-bold my-2`}>Sign Up</Text>
                    <Text style={tw`text-sm text-slate-100 mb-4`}>Enter your Hospital Details like name,Email,Phone
                    signup</Text>
                </View>
                <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
                    <Input />
                    <Input />
                    <Input />
                    <TouchableOpacity style={tw`bg-[#08857C] p-3 rounded-xl`}>
                        <Text style={tw`text-white text-sm text-center`}>SIGN IN</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
        </View>
    )
}

export default SignUp
