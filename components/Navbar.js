import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image src="/logo.png" alt="logo" height={40} width={200} />
      </div>
      <ul className="navbar-items">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/ninjas">Ninja List</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
