import { useState } from 'react'

function Login(props) {

    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          value={email}
          placeholder='Email'
          onChange={(e)=>setemail(e.target.value)}
          />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e)=>setpassword(e.target.value)}
          />
        <button>Login</button>
      </form>
      <button onClick={() => props.onFormSwitch('register')}>Don't have an acount? Register here</button>
       
    </>
  )
}

export default Login
