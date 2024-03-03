import React , {useRef}from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../store/userSlice";
// useDispatch 是去使用 在redux 定義的function
const NotLogin = () => {
  const dispatch = useDispatch();

  const nameRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const handleLogin = () => {
    const nameValue =nameRef.current.value 
    const ageValue =ageRef.current.value 
    const emailValue =emailRef.current.value 
    dispatch(setLogin({
        name:nameValue,
        age:ageValue,
        email:emailValue,
    }));
  };
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" placeholder="name" name="name" id="name" ref={nameRef}/>
      <label htmlFor="age">Age:</label>
      <input type="text" placeholder="age" name="age" id="age" ref={ageRef}/>
      <label htmlFor="email">Email:</label>
      <input type="text" placeholder="email" name="email" id="email" ref={emailRef}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default NotLogin;
