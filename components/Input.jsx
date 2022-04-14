import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import tw from 'twrnc'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Input = (props) => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =

        useTogglePasswordVisibility();

    const [password, setPassword] = useState('');
    return (
        <View style={tw` bg-[#F7F8FA] p-2 rounded-lg mb-4 flex-row justify-between`}>
            <TextInput
                placeholder={props.title}
                keyboardType='default'
                secureTextEntry={passwordVisibility}
                {...props}
            />
            {props.secureTextEntry &&
                <Pressable onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                </Pressable>
            }
        </View>
    )
}
export const useTogglePasswordVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };

    return {
        passwordVisibility,
        rightIcon,
        handlePasswordVisibility
    };
};

export default Input
