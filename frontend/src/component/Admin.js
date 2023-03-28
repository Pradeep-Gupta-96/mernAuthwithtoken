import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Admin = () => {
  const [data, setData] = useState({ title: "", discription: "" })
  const navigate=useNavigate()
  const onChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const API = 'http://localhost:4000/notes'

  const call = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      const result = await res.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    call(API)
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/notes', {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
        body: JSON.stringify(data)
      })
      const result = await res.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }

  }

const logout=()=>{
  localStorage.clear()
  navigate('/')
  
}
  return (
    <>
      <h1>notes</h1>
      <button onClick={logout}>Logout</button>
      <form onSubmit={submit}>
        <input type='text' name="title" placeholder='title' value={data.title} onChange={onChange} />
        <input type='text' name="discription" placeholder='discription' value={data.discription} onChange={onChange} />
        <button>Submiit!</button>
      </form>
      
    </>
  )
}

export default Admin