"use client"
import { InputField, LogoButton, MainButton } from "@/components";
import google from "@/public/images/google.png";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as React from "react";
import toast from "react-hot-toast";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

export default function Login() {
  const router = useRouter();
  const handleLogin = async () => {};
  const handleGoogleLogin = async () => {
    toast.error("Not yet implemented");
  };

  return (
    <Stack>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ mx: 4 }}>
              <Stack direction="row" spacing={3}>
                <LogoButton
                  icon={google}
                  label="Google"
                  handleClick={handleGoogleLogin}
                />
              </Stack>
              <Divider orientation="horizontal" flexItem sx={{ my: 4 }}>
                Or with email and password
              </Divider>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 3, md: 5 }}
              >
                <Grid item xs={12}>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Type your email address"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    label="Password"
                    placeholder="Type your password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MainButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    label="Login to continue"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0.7}
                mt={1}
              >
                <Grid item xs={12}>
                  {/*eslint-disable-next-line react/no-unescaped-entities*/}
                  <Typography>Don't have an account?</Typography>
                  <Button
                    fullWidth
                    onClick={() => router.push("/auth/register")}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box onClick={() => router.push("/auth/reset-password")}>
                    Reset Password
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Stack>
  );
}
