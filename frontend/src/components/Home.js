import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios"

const Home = () => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const logoutUser = async () =>{
        await axios.post("//localhost:5000/logout", {
            withCredentials: true
        })
        setUser(null)
        navigate("/")
    }

    useEffect(() => {
        (async () => {
            try {
                const headers = {
                    withCredentials: true,
                };
                console.log('Request Headers:', headers);
        
                const response = await axios.get('//localhost:5000/me', {
                    withCredentials: true,
                });

                setUser(response.data)
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);


    return (
        <>
            {user === null ? (<>
                <h1>hello</h1>
                <br />
                <p>You are not logged in right now. Please log in to access all resources</p>
                <div className='loginContainer'>
                    <Link to={'/login'}><button>Login</button></Link>
                    <Link to={'/register'}><button>Register</button></Link>
                    
                </div>
            </>) : (
                <div>
                <h2>Welcome to the page</h2>
                <h3>Email: {user.email}</h3>
                <h3>id: {user.id}</h3>
                <button onClick={logoutUser}>Logout</button>
                </div>
                
            )}
        </>
    )
}

export default Home
