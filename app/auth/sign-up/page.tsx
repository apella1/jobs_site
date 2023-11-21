"use client";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaRegUser, FaSuitcase } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="mt-4 h-screen"
    >
      <Stack spacing={4} className="self-center">
        <Typography variant="h3" className="self-center">
          Create Your Account
        </Typography>
        <Stack direction="row" spacing={4}>
          <Box
            sx={{ width: 600 }}
            className="flex flex-col space-y-4 border border-gray-300 p-8 rounded-[12px]"
          >
            <Avatar className="self-center bg-blue-500">
              <FaRegUser />
            </Avatar>
            <Typography variant="h4" className="self-center">
              Candidate
            </Typography>
            <Stack alignItems="center" justifyContent="center">
              <Typography variant="h6">Looking for your dream job?</Typography>
              <Typography variant="h6">
                Create a unique profile and get hired
              </Typography>
            </Stack>

            <Button
              variant="contained"
              className="self-center"
              onClick={() => router.push("/auth/candidate/sign-up")}
            >
              Sign Up as Candidate
            </Button>
          </Box>
          <Box
            sx={{ width: 600 }}
            className="flex flex-col space-y-4 border border-gray-400 p-8 rounded-[12px]"
          >
            <Avatar className="self-center bg-blue-500">
              <FaSuitcase />
            </Avatar>
            <Typography variant="h4" className="self-center">
              Employer
            </Typography>
            <Stack alignItems="center" justifyContent="center">
              <Typography variant="h6">
                Looking for quality candidates?
              </Typography>
              <Typography variant="h6">
                Advertise and search with LVPP
              </Typography>
            </Stack>
            <Button
              variant="contained"
              className="self-center"
              onClick={() => router.push("/auth/employer/sign-up")}
            >
              Sign Up as Employer
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
