import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setLogout } from '../store/userSlice'
const Login = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)
    const data = state.profile    
    const handleLogout = ()=>{
        dispatch(setLogout())
    }
  return (
    <div>
        <p>Name:{data.name}</p>
        <p>Age:{data.age}</p>
        <p>Email:{data.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Login