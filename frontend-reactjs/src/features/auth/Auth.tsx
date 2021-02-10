import React, {FC, useState} from 'react';
import http from "../../api/http";
import Loader from "../loader/Loader";

const Auth: FC = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        http.get('/auth')
            .then((res: any) => {
                if (res) {
                    window.location.href = res.redirectTo
                }
            })
            .finally(() => setTimeout(() => setLoading(false), 2000))
    };

    return (
        <div className="container">
            {loading && <Loader/>}
            <div className="card">
                <div className="inputWrapper">
                    <button type="button" disabled={loading} onClick={handleClick}>
                        Github Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
