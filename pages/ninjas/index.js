import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {ninjas: data}
  }
}


function ninjalist({ ninjas }) {
  return (
    <div>
      <h1>Hello Ninja</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id} passHref>
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default ninjalist;