import Link from 'next/link';
import styles from '../styles/StaticData.module.css';

const StaticData = ({ users }) => {
  return (
    <>
      <div>
        <h2>Static Data</h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </div>
      <div>
        <p>
          Data is shown on page and is server rendered using `getStaticProps`.
          Check the network tab to confirm that it is server rendered.
        </p>
        <p>
          The styling on this pages uses CSS Modules, which are NOT server
          rendered.
        </p>
        <ul className={styles.nameList}>
          {users.map((user) => (
            <li className={styles.name} key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default StaticData;
