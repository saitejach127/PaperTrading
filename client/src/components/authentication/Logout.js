import React,{useEffect} from 'react'
import {deleteCookie} from '../utils/index';

export default function Logout() {

    useEffect(() => {
        deleteCookie("jwttoken");
        window.location.href="/";
    }, [])

    return (
        <div>
            
        </div>
    )
}
