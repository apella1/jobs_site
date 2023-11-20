import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/photo.jpg";

export default function CompaniesHiring() {
  return (
    <Stack spacing={5} className="py-8">
      <Typography variant="h4" className="self-center">
        Companies Currently Hiring
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
        <Link href="/companies">
          <Image src={img} alt="Companies Currently Hiring" width={100} />
        </Link>
      </Stack>
      <Link
        href="/companies"
        className="text-blue-500 border border-blue-500 px-4 py-1 w-fit self-center rounded-[8px]"
      >
        View All Companies Hiring
      </Link>
    </Stack>
  );
}
