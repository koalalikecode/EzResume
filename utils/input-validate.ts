import { Theme, createTheme } from "@mui/material";

export const customInputAuthenTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#f8f8f2",
            "--TextField-brandBorderHoverColor": "#f8f8f2",
            "--TextField-labelColor": "rgba(248, 248, 242, 0.7)",
            "--TextField-brandBorderFocusedColor": "rgba(255, 121, 198)",
            "& label": {
              color: "var(--TextField-labelColor)",
            },
            "& label.Mui-disabled": {
              color: "var(--TextField-labelColor)",
            },
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: "var(--TextField-brandBorderColor)",
            "& .Mui-disabled": {
              color: "var(--TextField-labelColor)",
              WebkitTextFillColor: "var(--TextField-labelColor) !important",
            },
            "&:before": {
              borderBottom: "1px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export const checkNotEmpty = (inputText: string): boolean => {
  return inputText.trim().length > 0;
};

export const checkConfirmPassword = (
  confirmPassword: string | null,
  password: string | null
): boolean => {
  return password === confirmPassword;
};
