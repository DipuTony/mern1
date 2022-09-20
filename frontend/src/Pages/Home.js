import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()

const handleSaveBtn=()=>{
    console.log("Value is ", name, email, age)

    const data ={
        name:name,
        email:email,
        age:age
    }
    const config = {     
        headers: { 'content-type': 'application/json' },
        withCredentials: true
    }
    axios.post('http://localhost:4000/user',config,data)
    .then((res)=>{
        console.log("Data Saved", res)
    })
    .catch((err)=>{
        console.log("Something went Wrong", err)
    })


}

    return (
        <>
            <div>
                Name : <input className='border border-black' type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                Email : <input className='border border-black' type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                Age : <input className='border border-black' type="number" onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSaveBtn} className='border border-black' > Save </button>
            </div>
        </>
    )
}

export default Home