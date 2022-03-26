import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button';
import {StackActions, useNavigation} from '@react-navigation/core'

const SignUp = () => {

    const { dispatch } = useNavigation();
    const onSubmit = ()=>{
        dispatch(StackActions.push('SignIn'))
    }

    return (
        <View>
            <View style={tw`bg-[#08857C] `}>
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-lg font-bold my-2`}>Sign Up</Text>
                    <Text style={tw`text-sm text-slate-100 mb-4`}>Enter your Hospital Details like name,Email,Phone
                    signup</Text>
                </View>
                <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
                    <Input title="Full Name"/>
                    <Input title="Email"/>
                    <Input title="Password" />
                    <Button 
                        title="SIGN UP"
                        onPress={onSubmit}
                    />
                </View>

            </View>
        </View>
    )
}

export default SignUp
