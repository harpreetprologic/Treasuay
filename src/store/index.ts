import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { KEY_USER } from '../constants/keys';

import rootReducer from './reducers'
import { SET_USER_DETAILS } from './types';

const store = createStore(rootReducer, applyMiddleware(thunk));

AsyncStorage.getItem(KEY_USER).then(data => {
    if(data) {
        store.dispatch({
            type: SET_USER_DETAILS,
            payload: JSON.parse(data)
        })
    }
})

export default store;