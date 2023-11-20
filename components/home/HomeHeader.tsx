import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CgSearch } from "react-icons/cg";

const popularSearches = [
  "Software Engineer",
  "Product Manager",
  "Data Analyst",
  "Data Scientist",
  "Business Analyst",
  "Full Time",
  "Internship",
  "Part Time",
];
export default function HomeHeader() {
  return (
    <Stack className="pb-16 pt-28 mt-4 px-32 bg-[#6013AB] text-white" spacing={4}>
      <Box className="self-center">
        <Typography variant="h2">Explore and discover</Typography>
        <Typography variant="h2">the right job for you</Typography>
      </Box>
      <Stack direction="row" spacing={4} className="w-full">
        <Box className="flex w-full items-center space-x-4">
          <FormControl fullWidth>
            <InputLabel id="job-functions">All job functions</InputLabel>
            <Select
              labelId=""
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>IT and Software Development</MenuItem>
              <MenuItem value={20}>Agriculture and Farming</MenuItem>
              <MenuItem value={30}>Finance and Economics</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              All Industries
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Government</MenuItem>
              <MenuItem value={20}>Health Care</MenuItem>
              <MenuItem value={30}>Law and Compliance</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="location">All Locations</InputLabel>
            <Select
              labelId="location"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>Nairobi</MenuItem>
              <MenuItem value={20}>Kampala</MenuItem>
              <MenuItem value={30}>Mombasa</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="experience">All Experience Levels</InputLabel>
            <Select
              labelId="experience"
              id="demo-simple-select"
              //   value={age}
              label="Age"
              //   onChange={handleChange}
            >
              <MenuItem value={10}>No Experience</MenuItem>
              <MenuItem value={20}>Internship</MenuItem>
              <MenuItem value={30}>Entry Level</MenuItem>
              <MenuItem value={30}>Mid Level</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Button variant="contained">Find A Job</Button>
        </Box>
      </Stack>
      <Box component="section" className="flex flex-col space-y-4">
        <Typography variant="h4" component="h2">
          Popular Searches
        </Typography>
        <Stack direction="row" spacing={4}>
          {popularSearches.map((search, index) => (
            <Link
              href={`/jobs/${search.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <CgSearch />
                <Typography>{search}</Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
