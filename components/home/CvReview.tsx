import { Button, Container, Stack, Typography } from "@mui/material";
import img from "@/public/images/photo.jpg";
import Image from "next/image";

export default function CvReview() {
  return (
    <Container className="py-8">
      <Stack direction="row" spacing={4}>
        <Image src={img} height={600} width={400} alt="" className="rounded-[15px]" />
        <Stack className="self-center">
          <Typography variant="h4">Ready to level up your CV game?</Typography>
          <Typography variant="h6">
            Collaborate with a professional cv writer to highlight your skills
            and achievements like never before.
          </Typography>
          <Button variant="contained" className="w-fit">Upgrade My CV</Button>
        </Stack>
      </Stack>
    </Container>
  );
}
