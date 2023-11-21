/* eslint-disable react/no-unescaped-entities */
import { DatePickerComponent } from "@/components";
import {
  Box,
  FormControl,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function CandidateSignUp() {
  return (
    <Stack className="mt-4 min-h-screen px-32" spacing={4}>
      <Typography variant="h3" className="self-center">
        Create a Candidate Account
      </Typography>
      <Typography variant="h4" className="self-center">
        Your new career is one click away
      </Typography>
      <Stack spacing={4}>
        <Typography>STEP 1 of 2</Typography>
        <Box className="grid grid-cols-2 gap-3">
          <FormControl>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <TextField id="first-name" aria-describedby="Enter first name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <TextField id="last-name" aria-describedby="Enter last name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <TextField id="email" aria-describedby="Enter email address" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="nationality">Nationality</InputLabel>
            <TextField id="nationality" aria-describedby="Enter Nationality" />
          </FormControl>
          <DatePickerComponent />
        </Box>
      </Stack>
    </Stack>
  );
}
