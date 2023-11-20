"use client";
import img from "@/public/images/photo.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineHomeWork, MdNotifications } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function CareerAdvancement() {
  const router = useRouter();
  return (
    <Stack
      direction="row"
      spacing={4}
      className="bg-[#111827] p-8 text-white rounded-[15px]"
    >
      <Stack spacing={4} className="basis-1/2">
        <Typography variant="h5" className="text-white">
          Advance Your Career With LVPP
        </Typography>
        <Typography variant="h6">
          Create a free account, complete your profile, and get matched with
          your dream job.
        </Typography>
        <Stack direction="row" spacing={4}>
          <Button
            variant="contained"
            onClick={() => router.push("/auth/candidate/sign-up")}
          >
            Get Started
          </Button>
          <Link href="/candidate" className="flex items-center space-x-2">
            <Typography>Learn More</Typography>
            <FaArrowRight />
          </Link>
        </Stack>
        <Stack direction="row" spacing={5}>
          <Stack spacing={4}>
            <MdOutlineHomeWork />
            <Box>
              <Typography variant="h6">Get seen by employers</Typography>
              <Typography variant="h6">
                With a complete profile, your applications and profile are
                promoted to top employers, so you stand out.
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={4}>
            <MdNotifications />
            <Box>
              <Typography variant="h6">Get access to top jobs first</Typography>
              <Typography variant="h6">
                Sign up for job alerts and be first in line for the latest jobs
                that match your profile.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Image src={img} alt="" className="rounded-[15px]" width={600} />
    </Stack>
  );
}
