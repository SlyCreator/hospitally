import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import { StackActions, useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const { dispatch } = useNavigation();
    const onHospital = ()=>{
        dispatch(StackActions.push('SignUp'))
    }
    const onUser = ()=>{
        dispatch(StackActions.push('Search'))
    }
    return (
        <View>
            <View style={tw`bg-[#08857C] `}>
                <View style={tw`mx-4 pt-10 mt-4 `}>
                    <Text style={tw`text-white text-2xl  font-bold`}>Welcome to</Text>
                    <Text style={tw`text-white text-2xl  font-bold`}>Hospitally</Text>
                </View>
                <View style={tw`mx-4 my-4 py-2 `}>
                    <Text style={tw`text-sm  text-slate-100`}>Health is wealth , Never get stranded</Text>
                    <Text style={tw`text-sm  text-slate-100 `}>Search for Hospital closeby</Text>
                </View>
            </View>
            <View style={tw`p-4 mt-4`}>
                <TouchableOpacity onPress={onUser} style={tw`mb-4`}>
                    <View style={tw`bg-white p-2 rounded-lg`}>
                        <View style={tw`bg-sky-100 flex flex-row py-4 px-6 justify-between rounded-lg`}>
                            <View>
                                <Text style={tw`text-base font-bold mb-1`}>User account</Text>
                                <Text style={tw`text-sm text-gray-400`}>Search for Hopital Closeby</Text>
                            </View>
                            <View>
                                <FontAwesome5 name="hospital-alt" size={54} color="#08857C" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onHospital}>
                    <View style={tw`bg-white p-2 rounded-lg`}>
                        <View style={tw`bg-sky-100 flex flex-row py-4 px-6 justify-between rounded-lg`}>
                            <View>
                                <Text style={tw`text-base font-bold mb-1`}>Hospital account</Text>
                                <Text style={tw`text-sm text-gray-400`}>Create Hospital account </Text>
                            </View>
                            <View>
                            <Fontisto name="doctor"size={54} color="#08857C" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen
