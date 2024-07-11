import { ExperienceLevel } from "@/types/types";
import { Typography } from "@mui/material";
import Link from "next/link";
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
    <section className="flex flex-col space-y-6 px-32 py-8">
      <h1 className="title self-center">
        Find the right job vacancies for you
      </h1>
      <div className="flex flex-col space-y-6">
        <h2 className="sub-title self-center">Experience-based Filtering</h2>
        <div className="grid grid-cols-4 gap-4">
          {experienceLevels.map((experienceLevel, index) => (
            <div
              key={index}
              className="flex flex-col space-y-4 rounded-[8px] border border-gray-400 p-4"
            >
              <h3 className="self-center">{experienceLevel.title}</h3>
              <p className="self-center text-sm text-gray-600">
                {experienceLevel.jobs} Jobs
              </p>
              <Link
                href={experienceLevel.link}
                className="flex items-center space-x-2 self-center font-medium text-blue"
              >
                <Typography>Explore jobs</Typography>
                <GrLinkNext />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
