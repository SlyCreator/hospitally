import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button'
import {StackActions,useNavigation} from '@react-navigation/core'
const SignIn = () => {

    const {dispatch} = useNavigation();
    const onSubmit = ()=>{
        dispatch(StackActions.replace("Home"))
    }

    const onSignUp = ()=>{
        dispatch(StackActions.push('SignUp'))
    }
    return (
        <View>
            <View style={tw`bg-[#08857C] `}>
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-2xl font-bold my-4 text-center`}>Sign In</Text>
                    <Text style={tw`text-sm text-slate-100 mb-4 text-center`}>Have an Hospital Account ? Sign In your Profile</Text>
                </View>
                <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
                    <Input title="Email" />
                    <Input title="password" />
                    <Text style={tw`text-[#08857C] text-sm mb-4 text-right`}>forgot Password</Text>
                    <Button title="SIGN IN" onPress={onSubmit} />
                    <View style={tw`flex-row p-4 justify-center`}>
                        <Text style={tw`text-gray-500 item-center mr-2`}>New Hospital ?</Text>
                        <Text onPress={onSignUp} style={tw`text-[#08857C] fontbold`}>Sign-Up</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default SignIn
