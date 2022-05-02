import React,{useState,useContext} from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Input from '../components/Input'
import Button from '../components/Button'
import { StackActions, useNavigation } from '@react-navigation/native'
import { AuthService } from '../services/AuthService'
import { showMessage } from 'react-native-flash-message'
import {UserContext} from '../store/userContext'




const AddAddressScreen = () => {
    const { dispatch } = useNavigation();
    const user = useContext(UserContext)
    const [form,setForm] = useState({
        state:'',
        city:'',
        lga:'',
        street:''
    })
    const onSave = async () => {
        if (form.state == '') {

            return showMessage({
                message: "Fill in the state",
                type: "warning"
            })

        }else if (form.city == '') {

            return showMessage({
                message: "Fill in the city",
                type: "warning"
            })

        }else if (form.lga == '') {

            return showMessage({
                message: "Fill in the state",
                type: "warning"
            })

        }else if (form.street == '') {

            return showMessage({
                message: "Fill in the street",
                type: "warning"
            })

        }
        const res= await AuthService.updateAddress(form)
      
        if(res!=500){
            //update the store
            console.log('about to update Store')
            user.userDispatch({
                type: 'UPDATE-USER',
                payload: res,
              })
           return dispatch(StackActions.push('Profile'))
        } 
        return showMessage({
            message: "Error Occur try again",
            type: "warning"
        })

       
    }

    return (
        <View style={tw`bg-white flex-1 p-4`}>
          <Input title="State"
            
            value={form.state} 
            onChangeText={state=>setForm({...form,state})}
            secureTextEntry={false}
            />
            <Input 
                title="City" 
                value={form.city}
                onChangeText={city =>{
                    setForm({...form,city})
                }}
                secureTextEntry={false}
                />
  
            <Input title="L.G.A.  e.g Nsukka" 
                value={form.lga}
                onChangeText={lga=>{
                    setForm({...form,lga})
                }}
                secureTextEntry={false}
            />
            <Input title="Street" 
                value={form.street}
                onChangeText={street =>setForm({...form,street})}
                secureTextEntry={false}
            />

            <Button
                title="Save Address"
                onPress={onSave}
            />
        </View>
    )
}

export default AddAddressScreen
