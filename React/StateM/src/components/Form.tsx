import React, { useState } from 'react'
type formDataTypes = {
    name: string;
    email: string;
    password: string;
    userName: string;
}

const Form = () => {
    const [formData,  setFromData] = useState<formDataTypes>({
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
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name
            </label>
            <input
                type='text'
                id='name'
                name='name'
                value={formData.name
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    e.preventDefault();
                    setFromData((data) =>
                        </form>)
                }
                >Name</input>
        </form>
    </>
  )
}

export default Form
