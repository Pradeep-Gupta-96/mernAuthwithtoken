import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [data, setData] = useState({ username: "",  password: "",email: ""})
  const navigate=useNavigate()
  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const submit = async(e) => {
    e.preventDefault()
    const{username}=data
   const res=await fetch('http://localhost:4000/users/signup',{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
   })
   const result= await res.json()
   if(result.user.username===`${username}`){
     localStorage.setItem("username",JSON.stringify(result.user))
     localStorage.setItem("token",JSON.stringify(result.token))
    navigate('/signin')
   }
  }

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={submit}>
        <input type='text' name="username" placeholder='username' value={data.username} onChange={onChange} />
        <input type='text' name="password" placeholder='password' value={data.password} onChange={onChange} />
        <input type='text' name="email" placeholder='email' value={data.email} onChange={onChange} />
        <button>Submiit!</button>
      </form>
    </>
  )
}

export default Signup