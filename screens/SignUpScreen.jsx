import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button';
import { StackActions, useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { BaseUrl } from '../constants/constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useToast, { Toast } from '../hooks/useToast'
import { showMessage } from 'react-native-flash-message'

import { AuthService } from '../services/AuthService'


const SignUp = () => {

    const { dispatch } = useNavigation();

    const [value, setValue] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const onSubmit = async () => {
        //run a check
        if (value.fullName == '') {

            return showMessage({
                message: "Fill in the fullname",
                type: "warning"
            })

        }
        if (value.email == '') {
            return showMessage({
                message: "Fill in a correct email",
                type: "warning"
            })

        }
        if (value.password == '') {
            return showMessage({
                message: "Fill in the Password",
                type: "warning"
            })

        }

        const res = AuthService.register(value)
        if (res !=500) {
          return  dispatch(StackActions.push('Address'))
        }

        return showMessage({
            message: "Error Occur try again",
            type: "warning"
        })



    }
    const onSignIn = () => {
        dispatch(StackActions.push('SignIn'))
    }

    return (
        <KeyboardAwareScrollView >
            <View>
                <View style={tw`bg-[#08857C] `}>
                    <View style={tw`mx-4 pt-10 mt-4 `}>
                        <Text style={tw`text-white text-lg text-center font-bold my-2`}>Sign Up</Text>
                        <Text style={tw`text-sm text-center text-slate-100 mb-4`}>Enter your Hospital Details like name,Email,Phone
                    signup</Text>
                    </View>
                  
                    <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
                        <Input
                            title="Full Name"
                            value={value.fullName}
                            onChangeText={(fullName) => {
                                setValue({ ...value, fullName })
                            }}
                            secureTextEntry={false}

                        />
                        <Input
                            title="Email"
                            value={value.email}
                            onChangeText={email => {
                                setValue({ ...value, email })
                            }}
                            secureTextEntry={false}
                        />
                        <Input
                            title="Password"
                            value={value.password}
                            secureTextEntry

                            onChangeText={password => {
                                setValue({ ...value, password })
                            }}
                        />
                        <Button
                            title="SIGN UP"
                            onPress={onSubmit}
                        />
                        <View style={tw`flex-row p-4 justify-center`}>
                            <Text style={tw`text-gray-500 items-center mr-2`}>Alreadly Have an Account ?</Text>
                            <Text onPress={onSignIn} style={tw`text-[#08857C] font-bold`}>Sign-In</Text>
                        </View>
                    </View>

                </View>
            </View>

        </KeyboardAwareScrollView>
    )
}

export default SignUp
