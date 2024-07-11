import Link from "next/link";
import { PiSignIn } from "react-icons/pi";

interface NavLink {
  href: string;
  title: string;
}

const navLinks: NavLink[] = [
  {
    href: "/candidates",
    title: "Candidates",
  },
  {
    href: "/career",
    title: "Career",
  },
  {
    href: "/employers",
    title: "Employers",
  },
  { href: "/about-us", title: "About Us" },
  { href: "/contact-us", title: "Contact Us" },
];

export default function Navbar() {
  return (
    <nav className="">
      <section className="flex items-center justify-between p-4">
        <h1>
          <Link href="/">Job Market</Link>
        </h1>
        <div className="flex space-x-4">
          {navLinks.map((nav, index) => (
            <div key={index}>
              <Link href={nav.href}>{nav.title}</Link>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/auth/login"
            className="flex items-center space-x-3 rounded-lg bg-black px-4 py-2.5 text-white"
          >
            <PiSignIn className="text-xl font-bold" />
            <p>Sign In</p>
          </Link>
        </div>
      </section>
      <hr />
    </nav>
  );
}
