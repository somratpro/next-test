/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function notFound() {
 
  const router = useRouter();
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div>
      <h1>Oppssss!</h1>
      <p>Not Found this page</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}

export default notFound
