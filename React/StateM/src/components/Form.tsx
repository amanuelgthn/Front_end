import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
type formDataTypes = {
    fname: string;
    lname: string;
    email: string;
    password: string;
    userName: string;
    avatar: string;
}

const Form: FC = () => {
    const [formData,  setFormData] = useState<formDataTypes>({
        fname: '',
        lname: '',
        email: '',
        password: '',
        userName: '',
        avatar: '',
    })
    const navigate = useNavigate();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevents page reload
        try {
            const response = await fetch('https://dummyjson.com/user/register', {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)}
            )
            if (response.ok) {
                const result = await response.json();
                console.log('Registration successful:', result)
                alert('registration successful!')
            } else {
                console.error('Registration Failred', response.statusText)
                alert('registration failed')
            }
        }
        catch (error) {
            console.error('An error occured', error);
            alert('A error occured during registration')
        }
        navigate('/Clock')
        console.log("Form Submmited", formData)

    }
  return (
    <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={formData.fname}
          onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={formData.lname}
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          required
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={formData.userName}
          onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </label>
      <label>
        Avatar URL:
        <input
          type="url"
          value={formData.avatar}
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
        />
      </label>
      <button type="submit">Register</button>
    </form>
        <h1>
            Name: {formData.fname}
        </h1>
        <h1>
           
            Username : {formData.userName}
        </h1>
        <h1>
            Email: {formData.email}
        </h1>
        <h1>
            portrait:<img src={formData.avatar} alt={formData.userName} />
        </h1>
    </>
  )
}

export default Form
