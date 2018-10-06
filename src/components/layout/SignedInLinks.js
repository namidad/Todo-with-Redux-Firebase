import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to={"/todo-with-redux-firebase/create"}>New Project</NavLink>
            </li>
            <li>
                <NavLink to={"/todo-with-redux-firebase/"}>Log Out</NavLink>
            </li>
            <li>
                <NavLink to={"/todo-with-redux-firebase/"} className={"btn btn-floating pink lighten-1"}>OS</NavLink>
            </li>
        </ul>
    );
};


export default SignedInLinks;