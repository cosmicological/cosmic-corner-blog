import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-purple-950 p-2">
      <ul className="flex space-x-4 justify-left items-center divide-x divide-white">
        <Image
          src="https://placehold.co/60x40/jpg"
          alt="Logo"
          width={60}
          height={40}
          className="pr-4"
        />
        <li className="pr-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li className="pr-4">
          <Link href="/" className="text-white hover:underline">
            Projects
          </Link>
        </li>
        <li className="pr-4">
          <Link href="/" className="text-white hover:underline">
            Games
          </Link>
        </li>
        <li className="pr-4">
          <Link href="/" className="text-white hover:underline">
            Pics
          </Link>
        </li>
        <li className="pr-4">
          <Link href="/" className="text-white hover:underline">
            Vids
          </Link>
        </li>
        <li className="pr-4">
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
