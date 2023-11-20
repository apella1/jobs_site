import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";

type FooterItem = {
  title: string;
  link: string;
};

const footerItems: FooterItem[] = [
  { title: "About", link: "/about" },
  { title: "Companies Hiring", link: "/companies" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms", link: "/terms" },
  { title: "Soft Skills Training", link: "/soft-skills" },
  { title: "Skills Assessment", link: "/skills-assessment" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      component="section"
      sx={{ p: 2 }}
      className="py-8 px-32 flex flex-col space-y-6"
    >
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
      <Stack direction="row" spacing={4} className="text-xl">
        <Link href="/">
          <SiFacebook />
        </Link>
        <Link href="/">
          <SiTwitter />
        </Link>
        <Link href="/">
          <SiLinkedin />
        </Link>
        <Link href="/">
          <SiInstagram />
        </Link>
        <Link href="/">
          <SiWhatsapp />
        </Link>
      </Stack>
      <Divider component="hr" />
      <Typography variant="h6" className="self-center">
        &copy; {year} LVPP
      </Typography>
    </Box>
  );
}
