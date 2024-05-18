import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownContent from "./dropDownContent";

export const BuilderCard = () => {
  const [dropdownOpen, toggleDropdown] = useState(false);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="966px"
      border="1px solid #ebebeb"
      borderRadius={1}
      p="8px"
      position="relative"
    >
      <IconButton
        sx={{ border: "1px solid #ebebeb", margin: "0 8px 0 0" }}
        size="small"
      >
        <IoMdArrowDropdown />
      </IconButton>
      <Box flexGrow={1}>
        <Typography fontWeight={600}>Title</Typography>
        <Typography color="#717171">Add items to this module</Typography>
      </Box>
      <IconButton
        onClick={() => toggleDropdown(!dropdownOpen)}
        sx={{ background: "#f2f2f2", borderRadius: 1 }}
      >
        <BsThreeDots style={{ transform: "rotate(90deg)" }} />
      </IconButton>
      <Box
        position="absolute"
        width="222px"
        top="90%"
        right="0"
        sx={{ background: "#fff" }}
        zIndex={1000}
        overflow="hidden"
        height={dropdownOpen ? "auto" : 0}
      >
        <DropdownContent variant="builder" />
      </Box>
    </Box>
  );
};
