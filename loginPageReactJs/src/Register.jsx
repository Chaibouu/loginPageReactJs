import { useState } from 'react'

function Register(props) {

    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const handlesubmit = (e)=>{
      console.log(e);
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
    }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">Full Name</label>
        <input 
          type="text"
          value={name}
          placeholder='Full Name'
          onChange={(e)=>setname(e.target.value)}
          /> 
        <label htmlFor="email">Email {email}</label>
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
          <button onClick={() => props.onFormSwitch('Login')} type="submit">Already have an acount? Login here</button>
      </form>
      
       
    </>
  )
}

export default Register
