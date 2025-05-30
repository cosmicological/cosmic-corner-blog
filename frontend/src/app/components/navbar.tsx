import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-purple-950 p-2">
      <ul className="flex space-x-4 justify-left items-center">
        <Image
          src="https://placehold.co/60x40/jpg"
          alt="Logo"
          width={60}
          height={40}
        />
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
