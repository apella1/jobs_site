import { Button, Avatar } from "@mui/material";

export default function LogoButton({
  handleClick,
  label,
  icon,
}: {
  handleClick: () => void;
  label: string;
  icon: any;
}) {
  return (
    <Button
      startIcon={<Avatar src={icon} sx={{ height: "1rem", width: "1rem" }} />}
      fullWidth
      variant="outlined"
      color="secondary"
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
