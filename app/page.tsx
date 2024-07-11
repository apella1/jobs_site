import { ExperienceFilter, ExploreJobs, HomeHeader } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="section" className="">
      <HomeHeader />
      <ExperienceFilter />
      <ExploreJobs />
    </Box>
  );
}
