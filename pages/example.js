import Link from 'next/link';

export default function Example() {
  return (
    <div>
      <h1>This is an example page</h1>
      <Link href="/">
        <a>Back to Home Page</a>
      </Link>
    </div>
  );
}
