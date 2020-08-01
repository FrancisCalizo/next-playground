import Link from 'next/link';

export default function SsrPage({ users }) {
  return (
    <div>
      <h1>Page with data rendered with getServerSideProps</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const users = await (
    await fetch('https://jsonplaceholder.typicode.com/users')
  ).json();

  return {
    props: {
      users,
    },
  };
}
