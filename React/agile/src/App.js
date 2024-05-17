import React, { useEffect, useState } from 'react';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export default function Table() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${USERS_URL}?page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json.data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setIsLoading(false); 
            });
    }, [page]);

    const tableRows = [];

for (let i = 0; i < data.length; i++) {
    const user = data[i];
    tableRows.push(
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
        </tr>
    );
}
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
        
                </tbody>
            </table>
            <section className="pagination">
                <button className="first-page-btn" onClick={() => setPage(0)}>first</button>
                <button className="previous-page-btn" onClick={() => setPage(page - 1)} disabled={page === 0}>previous</button>
                <button className="next-page-btn" onClick={() => setPage(page + 1)}>next</button>
                <button className="last-page-btn" onClick={() => setPage(10 - 1)}>last</button>
            </section>
        </div>
    );
}
