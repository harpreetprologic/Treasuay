import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../../util';
import {SET_AUTH_LOADING, SET_USER_DETAILS, LOGOUT_USER} from '../types';
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
        payload: data
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

export const logout = () => (dispatch: any) => {
    dispatch({
        type: LOGOUT_USER
    })

    AsyncStorage.removeItem('user')
}