import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const jobFunctions = [
  "Accounting, Auditing and Finance",
  "Admin and Office",
  "Building and Architecture",
  "Community and Social Services",
  "Consulting and Strategy",
  "Creative and Design",
  "Customer Service and Support",
  "Driver and Transport Services",
  "Engineering and Technology",
  "Estate Agents and Property Management",
  "Farming and Agriculture",
  "Food Services and Catering",
  "Health and Safety",
  "Hospitality and Leisure",
  "Human Resources",
  "Legal Services",
  "Management and Business Development",
  "Marketing and Communications",
  "Medical and Pharmaceutical",
  "Product and Project Management",
  "Quality Control and Assurance",
  "Research, Teaching and Training",
  "Sales",
  "Software and Data",
  "Supply Chain and Procurement",
  "Trades and Services",
];

export default function ExploreJobs() {
  const chunks = Array.from(
    { length: Math.ceil(jobFunctions.length / 10) },
    (_, i) => jobFunctions.slice(i * 10, i * 10 + 10)
  );
  return (
    <Stack spacing={8} className="py-8 px-32">
      <Typography variant="h4" component="h3" className="self-center">
        Explore Jobs in Kenya by job Function
      </Typography>
      <Box className="grid grid-cols-3 gap-8">
        {chunks.map((chunk, i) => (
          <Stack key={i} spacing={2}>
            {chunk.map((jobFunction) => (
              <Link
                href={`/jobs/${jobFunction
                  .toLowerCase()
                  .replace(/[\s,]+/g, "-")}`}
                key={jobFunction}
              >
                {jobFunction}
              </Link>
            ))}
          </Stack>
        ))}
      </Box>
    </Stack>
  );
}
