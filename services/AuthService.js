import { BaseUrl } from '../constants/constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AuthService {

    static async register(value) {

        const response = await fetch(`${BaseUrl}/hospitals/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: value.fullName,
                email: value.email,
                password: value.password
            }),
        });
        const data =await response.json()
        if (data.statusCode == 500) {
            return 500
        } else {
            const res = await AuthService.login(value)
            return res;
        }
    }

    static async login(value) {
        const response = await fetch(`${BaseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: value.email,
                password: value.password
            }),
        })
        const data = await response.json()
        if (data.statusCode == 500) {
            return 500
        }else{
         
           await AsyncStorage.setItem('token', data.access_token)
           return 200
        } 
    }

    static async updateAddress(value) {

        const response = await fetch(`${BaseUrl}/hospitals/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: value.fullName,
                email: value.email,
                password: value.password
            }),
        });
        const data =await response.json()
        if (data.statusCode == 500) {
            return 500
        } else {
            const res = await AuthService.login(value)
            return res;
        }
    }

    // static updateDetails() {
    //     const token = await AsyncStorage.getItem('token');
    //     console.log(token);
    //     fetch(`${URL}/users/schedules`, {
    //         method: 'GET',
    //         headers: { Authorization: `Bearer ${token}` },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // dispatch({
    //             //   type: 'GET_USER_ROUTES',
    //             //   payload: data.data,
    //             // });
    //         })
    //         .catch(err => console.log(err));
    // };


}