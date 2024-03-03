import { createSlice } from "@reduxjs/toolkit";

// initialState : slice 一開始初始化的data
const initialState = {
    //profile 可以自己rename
    profile:{
        name:'',
        age:0,
        email:'',
        login:false
    }
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    // reducers: Redux 修改state的地方(在reducers 寫function都會自帶state,action)
    // state: 應用程式中的當前狀態
    // action: 是用來更新state(action.payload 會傳改變的資料, 是透過dispatch傳進來參數 )
    reducers:{
        setLogin(state, action){
            console.log('action',action)
            const { name, age, email } = action.payload
            state.profile={
                name,
                age,
                email,
                login:true
            }
        },
        setLogout(state){
            state.profile ={
                ...initialState.profile
            }
        }  
    }
})

export const {setLogin, setLogout} = userSlice.actions
export default userSlice.reducer

