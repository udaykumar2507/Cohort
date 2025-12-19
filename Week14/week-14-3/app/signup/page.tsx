'use client';
import { useState} from "react";

export default` function signup() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <>
        <h1>Signup Page</h1>
        <input type="text"  placeholder="Enter the Name" onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <input type="email" placeholder="Enter the Email" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <button onClick={() => {
            fetch('http://localhost:3000/api/user', {
                method: 'POST',
                headers: {  'Content-Type': 'application/json'  },
                body: JSON.stringify({ name, email })
            }).then(res => res.json())
              .then(data => console.log(data));
        }}>Submit</button>
        </>
    ); 
}