import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to={"/todo-with-redux-firebase/signup"}>Signup</NavLink>
            </li>
            <li>
                <NavLink to={"/todo-with-redux-firebase/signin"}>Login</NavLink>
            </li>
        </ul>
    );
};


export default SignedOutLinks;