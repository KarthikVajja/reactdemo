import { useState } from "react";
import { login, logout } from '../store'
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value.username);

    return (
        <h1>
            This is Login Page {user} <br/>
            <input onChange={(event) => {setUsername(event.target.value)}}/>
            <button onClick={() => dispatch(login({username: username}))}> Submit Login </button>
            <button onClick={() => dispatch(logout())}> Logout </button>
        </h1>
    );
}