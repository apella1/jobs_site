import { Button } from "@mui/material";

export default function MainButton({
  label,
  disabled,
  variant,
  type,
  handleClick,
}: {
  label: string;
  disabled?: boolean;
  variant?: any;
  type?: string;
  handleClick?: () => void;
}) {
  return (
    <Button
      disabled={disabled}
      fullWidth
      type="submit"
      variant={variant}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
}
