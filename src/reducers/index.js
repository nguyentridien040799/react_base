import { combineReducers } from 'redux';
import homepageReducer from './../modules/homepage/store/reducer';
import authReducer from './../modules/auth/store/reducer';

export default combineReducers({
    homepageReducer,
    authReducer
})
