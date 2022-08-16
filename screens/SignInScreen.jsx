import React, { useState,useContext } from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button'
import { StackActions, useNavigation } from '@react-navigation/native'
import { showMessage } from 'react-native-flash-message'
import { AuthService } from '../services/AuthService'
import {UserContext} from '../store/userContext'

const SignIn = () => {

    const { dispatch } = useNavigation();
    const user = useContext(UserContext)

    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const onSubmit = async() => {

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

        const res = await AuthService.login(value)
        if (res == 200 || res == 201) {
            user.userDispatch({
                type: 'UPDATE-USER',
                payload: res,
              })
            return dispatch(StackActions.push("Profile"))
        }

        return showMessage({
            message: "Error: details not correct",
            type: "warning"
        })

    }

    const onSignUp = () => {
        dispatch(StackActions.push('SignUp'))
    }
    return (
        <View style={tw`bg-[#08857C] `}>

            <View >
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-2xl  font-bold`}>Welcome Back</Text>
                    <Text style={tw`text-white text-2xl  font-bold`}>Sign In</Text>
                </View>
                <View style={tw`mx-4 my-4 py-2 `}>
                    <Text style={tw`text-sm  text-slate-100`}>Health is wealth, Help save the world</Text>
                    <Text style={tw`text-sm  text-slate-100 `}>want to update your account ?</Text>
                </View>
            </View>
            <View style={tw`px-4 bg-white h-full rounded-t-[24px] my-2 py-10`}>
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
                <Text style={tw`text-[#08857C] text-sm mb-4 text-right`}>forgot Password</Text>
                <Button title="SIGN IN" onPress={onSubmit} />
                <View style={tw`flex-row p-4 justify-center`}>
                    <Text style={tw`text-gray-500  mr-2`}>New Hospital ?</Text>
                    <Text onPress={onSignUp} style={tw`text-[#08857C] font-bold`}>Sign-Up</Text>
                </View>
            </View>

        </View>
    )
}

export default SignIn
