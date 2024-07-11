import { Divider, Stack } from "@mui/material";
import Link from "next/link";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";

interface FooterItem {
  title: string;
  link: string;
}

interface Site {
  link: string;
  icon: JSX.Element;
}

const footerItems: FooterItem[] = [
  { title: "About", link: "/about" },
  { title: "Companies Hiring", link: "/companies" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms", link: "/terms" },
  { title: "Soft Skills Training", link: "/soft-skills" },
  { title: "Skills Assessment", link: "/skills-assessment" },
];

const socialMediaSites: Site[] = [
  {
    link: "facebook",
    icon: <SiFacebook />,
  },
  {
    link: "twitter",
    icon: <SiTwitter />,
  },
  {
    link: "linkedin",
    icon: <SiLinkedin />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 flex flex-col space-y-6 px-32 py-8">
      <Stack
        direction="row"
        spacing={4}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {footerItems.map((item, index) => (
          <Link key={index} href={item.link} className="text-blue-500">
            {item.title}
          </Link>
        ))}
      </Stack>
      <section className="flex items-center space-x-4 text-xl">
        {socialMediaSites.map((site) => (
          <Link href={site.link} key={site.link}>
            {site.icon}
          </Link>
        ))}
      </section>
      <hr />
      <p className="self-center">&copy; {year} Job Market</p>
    </footer>
  );
}
