import React, { useState } from 'react'
import httpClient from './utils/httpClient'



const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logInUser = async ()=>{
        console.log(email, password);

        try {
            const response = await httpClient.post("//localhost:5000/login",{
                email,
                password,
            })

            window.location.href = "/"
        } catch (error) {
            if(error.response.status === 401){
                alert("invalid creds")
            }
            
        }
    }

    return (
        <div>
            <h1>Login to your Account</h1>
            <form>
                <div>
                <label>Email:</label>
                <input type="text" placeholder='email id' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                <label>Password:</label>
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='button' onClick={logInUser}>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage
