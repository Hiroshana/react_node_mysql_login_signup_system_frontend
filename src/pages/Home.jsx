import React, { useEffect } from 'react'
import Register from './Register'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:3000/auth/home', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (response.status !== 201) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error)
            navigate('/login')
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div className=''>
            Home
        </div>
    )
}

export default Home