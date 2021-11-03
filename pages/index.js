import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.main}>
      <h1>Hello Next.js</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ratione aliquid harum dicta sint? Nesciunt reprehenderit incidunt, obcaecati deleniti tempore, ullam animi distinctio voluptatibus autem architecto ratione aperiam dolor fuga!</p>
    </div>
    </>
  )
}
