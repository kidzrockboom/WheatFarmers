"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Our projects</li>

        <Image src="/next.svg" width={200} height={200} alt="navbar icon" />

        <li>Contact Us</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
