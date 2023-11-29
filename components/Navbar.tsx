"use client";
import { NavLink } from "@/types/types";
import { AppBar, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const navLinks: NavLink[] = [
  {
    href: "/candidates",
    title: "Candidates",
    options: ["Job Vacancies", "Soft Skills Training", "Career Advice"],
  },
  {
    href: "/career",
    title: "Career",
    options: ["Career Development", "Life at Work", "Career News"],
  },
  {
    href: "/employers",
    title: "Employers",
    options: ["Skills Assessment", "Employer Corner"],
  },
  { href: "/about-us", title: "About Us" },
  { href: "/contact-us", title: "Contact Us" },
];

const NavOptions = ({ nav }: { nav: NavLink }) => {
  return (
    <Box className="flex flex-col space-y-4">
      {nav.options?.map((option, index) => (
        <Link key={index} href={nav.href}>
          {option}
        </Link>
      ))}
    </Box>
  );
};

export default function Navbar() {
  const [showLinkOptions, setShowLinkOptions] = useState(false);
  const handleShowLinkOptions = () => setShowLinkOptions(!showLinkOptions);

  return (
    <AppBar position="fixed" className="h-auto mb-4">
      <Box component="section" className="flex justify-between p-4">
        <Box className="flex items-center space-x-8">
          <Typography variant="h6" component="h2">
            <Link href="/">LVPP</Link>
          </Typography>
          <Box className="flex space-x-4">
            {navLinks.map((nav, index) => (
              <Box key={index}>
                <Link
                  href={nav.href}
                  onMouseOver={() => handleShowLinkOptions()}
                  onMouseOut={() => handleShowLinkOptions()}
                >
                  {nav.title}
                </Link>
                {nav.options && <p></p>}
                {showLinkOptions && nav.options && <NavOptions nav={nav} />}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="space-x-4">
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/sign-up">Sign Up</Link>
          <Button variant="contained" color="secondary">
            Post a Job
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
