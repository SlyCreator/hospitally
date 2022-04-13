import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import tw from 'twrnc'
const Input = (props) => {
    return (
        <View>
            <TextInput
                placeholder={props.title}
                keyboardType='default'
                style={tw` bg-[#F7F8FA] p-2 rounded-lg mb-4 `}
            //    value={props.value}
                {...props}
                />
        </View>
    )
}

export default Input
