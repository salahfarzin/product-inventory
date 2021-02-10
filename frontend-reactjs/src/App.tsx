import React, {FC, lazy, Suspense, useEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from './rootReducer';
import http from "./api/http";
import {User} from "./interfaces/user";
import {AuthResponse} from "./interfaces/authResponse";
import {useAppDispatch} from "./store";
import {login} from "./features/auth/authSlice";
import {showAlert} from "./util";

const Auth = lazy(() => import('./features/auth/Auth'));
const Product = lazy(() => import('./features/product/Product'));

const App: FC = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const willMount = useRef(true);

    const isLoggedIn = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    useEffect(() => {

    });
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (!isLoggedIn && code) {
                setLoading(true);
                http
                    .get<User, AuthResponse>('auth/github?code=' + code,)
                    .then((res) => {
                        dispatch(login(res));
                        window.location.href = '/';
                    })
                    .catch((error) => {
                        showAlert(error.message, 'error');
                    }).finally(() => setLoading(false));
            }

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Suspense fallback={<p>Loading...</p>}>
                        {isLoggedIn ? <Product/> : <Auth/>}
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
