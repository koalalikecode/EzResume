import { alpha, styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function SwitchButton({
  color,
  label,
  checked,
  handleChecked,
}: {
  color: string;
  label: string;
  checked: boolean;
  handleChecked: (e: any) => void;
}) {
  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: color,
      "&:hover": {
        backgroundColor: alpha(color, theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: color,
    },
  }));
  return (
    <FormControlLabel
      control={
        <CustomSwitch size="small" checked={checked} onChange={handleChecked} />
      }
      label={label}
      sx={{
        margin: "6px 0 0 0px",
        "& .MuiFormControlLabel-label": {
          fontSize: "14px",
        },
      }}
    />
  );
}
