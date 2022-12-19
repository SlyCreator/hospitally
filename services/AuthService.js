import { BaseUrl } from "../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export class AuthService {
  constructor() {
    this.dispatch = useContext(UserContext);
  }
  static async register(value) {
    const data = await axios.post(`${BaseUrl}/hospitals/register`, value, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(data);
    if (data.statusCode == 500) {
      return 500;
    }

    // else {
    //   const res = await AuthService.login(value);
    //   return res;
    // }
  }

  static async login(value) {
    const response = await fetch(`${BaseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    });
    const data = await response.json();
    console.log(response.status);
    if (data.statusCode == 401) {
      return 401;
    }
    if (data.statusCode == 500) {
      return 500;
    } else {
      let num = data.user.id;
      let id = num.toString();
      await AsyncStorage.setItem("token", data.access_token);
      await AsyncStorage.setItem("id", id);
      return data.user;
    }
  }

  static async updateAddress(value) {
    const token = await AsyncStorage.getItem("token");
    const userId = await AsyncStorage.getItem("id");
    const response = await fetch(`${BaseUrl}/hospitals/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: value.state,
        city: value.city,
        lga: value.lga,
        address: value.street,
      }),
    });
    const data = await response.json();
    if (data.statusCode == 500) {
      return 500;
    } else {
      const data = await AuthService.fetchUser(userId);
      return data;
    }
  }
  static async fetchUser(id) {
    const response = await fetch(`${BaseUrl}/hospitals/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.statusCode == 500) {
      return 500;
    } else {
      return data;
    }
  }
  // static updateDetails() {
  // const token = await AsyncStorage.getItem('token');
  // console.log(token);
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
