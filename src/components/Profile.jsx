import React from 'react'
import Login from './Login'
import NotLogin from './NotLogin'
import { useSelector } from 'react-redux'

//useSelector: 用來取得redux 裡面的state


const Profile = () => {
    // user是前面 app.js 定義的
    const state = useSelector(state=> state.user)
  return (
    <div style={{marginTop:'50px'}}>
        {
            state.profile.login 
            ? <Login/> 
            : <NotLogin/>
        }
    </div>
  )
}

export default Profile