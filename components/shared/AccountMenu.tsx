import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useAppDispatch } from "redux/hooks";
import { userInfoReset } from "redux/userSlice";
import { useNavigate } from "react-router";
import { resumesClear } from "redux/resumesSlice";

function AccountMenu({ anchorEl, handleClose }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(userInfoReset());
    dispatch(resumesClear());
    navigate("/");
  };
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            background: "#44475A",
            color: "#F8F8F2",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#44475A",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" sx={{ color: "#8be9fd" }} />
        </ListItemIcon>
        Account Settings
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" sx={{ color: "#8be9fd" }} />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default AccountMenu;
