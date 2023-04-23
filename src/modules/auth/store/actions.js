/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import {
    AUTH_CHECK,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REFRESH_TOKEN,
    AUTH_RESET_PASSWORD,
    AUTH_USER,
} from './action-types';


export const authCheck = () => {
    return {
        type: AUTH_CHECK,
    }
}

export const authLogin = (payload) => {
    return {
        type: AUTH_LOGIN,
        payload,
    };
}

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
    }
}

export const authRefreshToken = (payload) => {
    return {
        type: AUTH_REFRESH_TOKEN,
        payload
    }
}

export const authResetPassword = () => {
    return {
        type: AUTH_RESET_PASSWORD,
    }
}

export const authUser = (payload) => {
    return {
        type: AUTH_USER,
        payload
    }
}
