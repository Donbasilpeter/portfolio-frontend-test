import { SxProps } from "@mui/system";

export interface HeaderDrawerProps {
  handleDrawerToggle: () => void;
  navItems: string[];
}

export interface SocialMediaGridProps {
  sx?: SxProps<any>;
  fontSize: number;
}
