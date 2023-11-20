import {
  CareerAdvancement,
  CompaniesHiring,
  CvReview,
  EmployerHub,
  ExperienceFilter,
  ExploreJobs,
  HomeHeader,
} from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box component="section" className="">
      <HomeHeader />
      <ExperienceFilter />
      <CompaniesHiring />
      <CareerAdvancement />
      <CvReview />
      <EmployerHub />
      <ExploreJobs />
    </Box>
  );
}
