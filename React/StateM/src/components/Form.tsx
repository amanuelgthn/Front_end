import React, { useState } from 'react'
type formDataTypes = {
    name: string;
    email: string;
    password: string;
    userName: string;
}

const Form = () => {
    const [formData,  setFormData] = useState<formDataTypes>({
        name: '',
        email: '',
        password: '',
        userName: ''
    })
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevents page reload
        console.log("Form Submmited", formData)
    }
  return (
    <>
        <h1>Form</h1>
        <form>
            <label htmlFor='Name'>Name</label>
            <input type='text' placeholder='Enter Your Name here ..' value={formData.name}  onChange={(e) => setFormData((data) => ({...data, name: e.target.value}))}/>
            <label htmlFor='username'>User Name</label>
            <input type='text' placeholder='Enter Your username' value={formData.userName} onChange={(e) => setFormData((data) => ({ ...data, username: e.target.value}))}/>
            <label htmlFor='Email'>Email</label>
            <input type='email' placeholder='Email ..' value={formData.email} onChange={(e) => setFormData((data) => ({ ...data, email: e.target.value}))} />
            <label htmlFor='Password'>Password</label>
            <input type='text' placeholder='Password ..' value={formData.password} />
        </form>
        <h1>
            Name: {formData.name}
        </h1>
        <h1>
           
            Username : {formData.userName}
        </h1>
        <h1>
            Email: {formData.email}
        </h1>
        <button>Submit</button>
    </>
  )
}

export default Form
