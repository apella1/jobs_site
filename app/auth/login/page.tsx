/* eslint-disable react/no-unescaped-entities */
"use client";
import { LogoButton } from "@/components";
import google from "@/public/images/google.png";
import login from "@/public/images/login.jpg";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

export default function Login() {
  const handleSocialLogin = async () => {
    toast.error("Not implemented yet");
  };
  return (
    <Stack className="mt-4 h-screen pb-8">
      <Stack direction="row" className="mt-4">
        <Stack className="basis-1/2 p-8" spacing={4}>
          <Typography variant="h5" component="h2">
            Log In
          </Typography>
          <Typography variant="h6">
            Use your social account to log in
          </Typography>
          <Stack direction="row" spacing={4}>
            <LogoButton
              label=""
              icon={google}
              handleClick={handleSocialLogin}
            />
            <LogoButton
              label=""
              icon={google}
              handleClick={handleSocialLogin}
            />
            <LogoButton
              label=""
              icon={google}
              handleClick={handleSocialLogin}
            />
          </Stack>
          <Divider orientation="horizontal" flexItem sx={{ my: 4 }}>
            Or continue with
          </Divider>
          <FormControl>
            <TextField placeholder="Email Address" />
          </FormControl>
          <FormControl>
            <TextField placeholder="Password" />
          </FormControl>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Checkbox color="primary"/>
            <Typography>Keep me logged in</Typography>
          </Stack>
          <Button variant="contained" color="primary">
            Login
          </Button>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="h6">Don't have an account?</Typography>
            <Link href="/auth/signup" className="text-blue-500">
              Sign Up
            </Link>
          </Stack>
        </Stack>
        <Stack className="basis-1/2">
          <Image src={login} alt="" className="h-screen" />
        </Stack>
      </Stack>
      <Divider component="hr" />
    </Stack>
  );
}
