import React, { useState } from 'react'
import httpClient from './utils/httpClient'



const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async ()=>{
        console.log(email, password);

        try {
            const response = await httpClient.post("//localhost:5000/register",{
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

                <button type='button' onClick={registerUser}>Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage
