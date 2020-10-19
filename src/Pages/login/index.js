import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            history.push("/dashboard")
        },3000)
    },[])
    return (
        <div>
            Login
        </div>
    )
}

export default Login
