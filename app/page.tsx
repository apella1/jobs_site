import { ExperienceFilter, ExploreJobs, HomeHeader } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 2 }} component="section" className="px-32">
      <HomeHeader />
      <ExperienceFilter />
      <ExploreJobs />
    </Box>
  );
}
