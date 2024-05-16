import { useState } from 'react';
export default function SignForm() {
    const [person, setPerson] = useState({
        firstName: 'Steven',
        lastName: 'Gerard',
        email : 'stevengerard@liverpoolfc.com'
    });

    function handleFirstNameChange(event) {
        setPerson({
            ...person,
            firstName: event.target.value,
    })
    }

    function handleLastNameChange(event) {
        setPerson({
            ...person,
            lastName: event.target.value,
        });
    }
    function handleEmailChange(event) {
        setPerson({
            ...person,
            email: event.target.value
        })
    }
    return (
        <>
            <label>
                First Name: 
                <input 
                    type='text'
                    value={person.firstName} 
                    onChange={handleFirstNameChange}
                    />
            </label>
            <label>
                Last Name: 
                <input 
                    type='text'
                    value={person.lastName} 
                    onChange={handleLastNameChange}
                    />
            </label>
            <label>
                Email:
                <input 
                    type='email'
                    value={person.email} 
                    onChange={handleEmailChange}
                    />
            </label>
            <p>
                {person.firstName}
                {person.lastName}
                {person.email}
            </p>
        </>
    )
}