import Image from "next/image";
import logo from "/public/logo.webp";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-8">
      <Image src={logo} alt="logo" className="w-40" />
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"/"}>All Products</Link>
        </li>
      </ul>
      <div className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-200">
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
}
