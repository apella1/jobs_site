import Link from "next/link";

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
    <nav className="h-auto mb-4">
      <section className="flex justify-between p-4">
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
        <div className="space-x-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/sign-up">Sign Up</Link>
        </div>
      </section>
    </nav>
  );
}
