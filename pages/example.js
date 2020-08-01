import Head from 'next/head';
import Link from 'next/link';

export default function Example() {
  return (
    <div>
      <Head>
        <title>Example Page</title>
      </Head>
      <h1>This is an example page</h1>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
    </div>
  );
}
