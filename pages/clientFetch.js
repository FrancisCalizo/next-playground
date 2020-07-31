import { useState, useEffect } from 'react';

const ClientFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Data using window fetch</h1>
      <p>
        Data is shown on page, but check network tab. It is not server rendered.
        It is client rendered because of the fetch API
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientFetch;
