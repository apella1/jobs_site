import img from "@/public/images/photo.jpg";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function EmployerHub() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className="bg-blue-300 rounded-[25px] p-8 my-8"
    >
      <Stack spacing={4}>
        <Typography variant="h5" className="uppercase">
          For Employers
        </Typography>
        <Typography variant="h5">Searching for the right talent?</Typography>
        <Typography variant="h6">
          We have more than 2.8 million job-seekers across all levels, right for
          your organization!
        </Typography>
        <Link href="/employer" className="bg-white px-5 py-1 text-blue-600 rounded-[8px] w-fit">
          Learn More
        </Link>
      </Stack>
      <Image src={img} alt="" width={300} className="rounded-[15px]" />
    </Stack>
  );
}
