import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const onChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const submit = async (e) => {
        e.preventDefault()
        const {email}=data
        const res = await fetch('http://localhost:4000/users/sigin', {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()
       if(result.user.email===`${email}`){
        localStorage.setItem("username",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.token))
        navigate('/admin')
       }
      
    }

    return (
        <>
            <h1>Signin</h1>
            <form onSubmit={submit}>
                <input type='text' name="email" placeholder='email' value={data.email} onChange={onChange} />
                <input type='text' name="password" placeholder='password' value={data.password} onChange={onChange} />
                <button>Submiit!</button>
            </form>
        </>
    )
}

export default Signin