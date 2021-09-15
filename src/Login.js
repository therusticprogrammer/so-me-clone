import React from 'react';
import "./Login.css"
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"
import { Button } from "@material-ui/core";


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Sign in..
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                     type: actionTypes.SET_USER,
                     user: result.user,
                })
                //console.log(result);
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
                
            <div className="login__logo">
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                    alt=""
                />
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
                    alt=""
                />
                
            </div>
            
            <Button type="submit" onClick={signIn}>
                SIGN IN
            </Button>   

        </div>
    );
}

export default Login;