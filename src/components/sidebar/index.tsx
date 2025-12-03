import { Drawer } from "@mui/material";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { SidebarStyle } from "./style";
import SidebarContent from "./content";
import Usetheme from "@/utils/theme";
const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);


  const { isPhone } = Usetheme();
  return (
    <Drawer
      sx={SidebarStyle}
      className={`w-[304px] md:w-[106px] lg:w-[280px] ${
        isPhone ? "" : "relative"
      }`}
      variant={isPhone ? "temporary" : "permanent"}
      anchor="right"
      open={isPhone ? open : true}
      onClose={() => setOpen(false)}
      ref={drawerRef}
      ModalProps={{
        keepMounted: true,
        BackdropProps: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.14)",
          },
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default Sidebar;
