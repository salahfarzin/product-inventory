import { createSlice } from '@reduxjs/toolkit';
export const TOKEN_KEY = 'pe-4gd-*';

interface AuthState {
    token: string | null | void;
    isAuthenticated: boolean | void;
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: !!getToken(),
};

export function getToken() {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState(state, { payload }: any) {
            state.isAuthenticated = payload;
        },
        login(state, { payload }: any) {
            state.token = payload ? payload : getToken();
            state.isAuthenticated = payload;
            localStorage.setItem(TOKEN_KEY, payload.token);
        },
        logout(state, { payload }: any) {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem(TOKEN_KEY);
        },
    },
});

export const { setAuthState, login, logout } = auth.actions;
export default auth.reducer;
