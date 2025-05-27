import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-2">
      <ul className="flex space-x-4 justify-left items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
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
