import React from 'react'
import { View, Text, TextInput } from 'react-native'
import tw from 'twrnc'
const Input = () => {
    return (
        <View>
            <TextInput
                placeholder="Full Name"
                keyboardType='default'
                style={tw` bg-[#F7F8FA] p-2 rounded-lg mb-4 `} />
        </View>
    )
}

export default Input
