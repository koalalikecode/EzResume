import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { signout } from "@/lib/authen/actions";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";

function AccountMenu({
  anchorEl,
  handleClose,
  handleOpenProfile,
}: {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  handleOpenProfile: any;
}) {
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    signout();
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
            background: "oklch(var(--n))",
            color: "oklch(var(--nc))",
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
              bgcolor: "oklch(var(--n))",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={() => handleOpenProfile(true)}>
        <ListItemIcon>
          <Settings fontSize="small" sx={{ color: "oklch(var(--p))" }} />
        </ListItemIcon>
        Account Settings
      </MenuItem>
      <MenuItem>
        <Link href="/dashboard" className="flex items-center">
          <ListItemIcon>
            <DashboardIcon fontSize="small" sx={{ color: "oklch(var(--p))" }} />
          </ListItemIcon>
          Dashboard
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" sx={{ color: "oklch(var(--p))" }} />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}

export default AccountMenu;
