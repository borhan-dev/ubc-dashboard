import {
  HomeOutlined,
  PostAddOutlined,
  RssFeedRounded,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const navItems: {
  text: string;
  Icon:
    | (OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
        muiName: string;
      })
    | null;
}[] = [
  {
    text: "Dashboard",
    Icon: HomeOutlined,
  },
  {
    text: "Post",
    Icon: null,
  },
  {
    text: "Manage Posts",
    Icon: RssFeedRounded,
  },
  {
    text: "Create Post",
    Icon: PostAddOutlined,
  },
];
