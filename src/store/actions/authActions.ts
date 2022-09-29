import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../../util';
import {SET_AUTH_LOADING, SET_USER_DETAILS, LOGOUT_USER,GET_USER_PROFILE} from '../types';
import { KEY_USER } from '../../constants/keys';
import { getErrorMessage } from '../../util/methods';

export const login =
  (username: string, password: string) => async (dispatch: any) => {
    try {
    dispatch({
      type: SET_AUTH_LOADING,
      payload: true,
    });

    const {data} = await api.post('auth/login/', {
        username, 
        password
    })

    dispatch({
        type: SET_USER_DETAILS,
        payload: {
          userDetails: data
        }
    })

    AsyncStorage.setItem(KEY_USER, JSON.stringify(data))

    }catch (error: any) {
        console.log('...Error in login authActions', error);

        dispatch({
            type: SET_AUTH_LOADING,
            payload: false,
          });

        Alert.alert(getErrorMessage(error));
    }
  };

export const signup =
(name:string,treasury_name: string,email: string, password: string) => async (dispatch: any) => {
  try {
  dispatch({
    type: SET_AUTH_LOADING,
    payload: true,
  });

  const {data} = await api.post('auth/signup/', {
    name,
    treasury_name,
      email, 
        password
  })

  dispatch(login(email, password))

  Alert.alert(data.detail)

  }catch (error: any) {
      console.log('...Error in sign up authActions', error)
      Alert.alert(getErrorMessage(error));
  } finally {
    dispatch({
      type: SET_AUTH_LOADING,
      payload: false,
    });
  }
};

export const getProfile =
() => async (dispatch: any) => {
  try {
  dispatch({
    type: SET_AUTH_LOADING,
    payload: true,
  });

  const {data} = await api.get('auth/profile/')

  dispatch({
    type: SET_USER_DETAILS,
    payload: {
      userDetails: data.user,
      followers: data.followers ?? 0,
      following: data.following ?? 0,
      treasures: data.treasures ?? 0,
    }
})

AsyncStorage.setItem(KEY_USER, JSON.stringify(data.user))

  }catch (error: any) {
      console.log('...Error in profile authActions', error)
      Alert.alert(getErrorMessage(error));
  } finally {
    dispatch({
      type: GET_USER_PROFILE,
      payload: false,
    });
  }
};


export const logout = () => (dispatch: any) => {
    dispatch({
        type: LOGOUT_USER
    })

    AsyncStorage.removeItem('user')
}