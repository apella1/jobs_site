import { ExperienceLevel } from "@/types/types";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FcNext, FcPrevious } from "react-icons/fc";
import { GrLinkNext } from "react-icons/gr";

const experienceLevels: ExperienceLevel[] = [
  {
    title: "Internship & Graduate",
    jobs: 100,
    link: "/jobs?experience=internship",
  },
  { title: "Entry Level", jobs: 100, link: "/jobs?experience=entry" },
  { title: "Mid Level", jobs: 100, link: "/jobs?experience=mid" },
  { title: "Senior Level", jobs: 100, link: "/jobs?experience=senior" },
  { title: "Managerial Level", jobs: 100, link: "/jobs?experience=managerial" },
  { title: "Executive Level", jobs: 100, link: "/jobs?experience=executive" },
];

export default function ExperienceFilter() {
  return (
    <Stack className="py-8">
      <Typography variant="h4" component="h3" className="self-center">
        Find the right job vacancies in Kenya
      </Typography>
      <Box className="flex flex-col space-y-4">
        <Typography variant="h4">Experience-based Filtering</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">
            Find jobs that suit your experience level
          </Typography>
          <Box className="flex items-center space-x-3">
            <Typography variant="h6">View More Experience Levels</Typography>
            <FcPrevious className="cursor-pointer" />
            <FcNext className="cursor-pointer" />
          </Box>
        </Stack>
        <Box component="section" className="grid grid-cols-4 gap-4">
          {experienceLevels.map((experienceLevel, index) => (
            <Box
              key={index}
              className="flex flex-col space-y-4 border border-gray-400 p-4 rounded-[8px]"
            >
              <Typography variant="h6" className="self-center">
                {experienceLevel.title}
              </Typography>
              <Typography
                variant="h6"
                className="self-center text-gray-300 text-[14px]"
              >
                {experienceLevel.jobs} Jobs
              </Typography>
              <Link
                href={experienceLevel.link}
                className="flex items-center space-x-2 text-blue-400 self-center font-medium"
              >
                <Typography>Explore jobs</Typography>
                <GrLinkNext />
              </Link>
            </Box>
          ))}
        </Box>
        <Button variant="contained" className="self-center">
          Explore All Jobs
        </Button>
      </Box>
    </Stack>
  );
}
