import { Box, Button, Typography, styled } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import DropdownContent from "./dropDownContent";
import { useState } from "react";

// APPLYING STYLES FOR THE ADD BUTTON
const CustomButton = styled(Button)({
  background: "#AF273E",
  color: "#fff",
  borderRadius: "6px",
  padding: "13px 8px 13px 16px",
  "&:hover": {
    background: "#AF273E",
  },
});

const Header = () => {
  const [dropdownOpen, toggleDropDown] = useState(false);

  return (
    <Box
      width="966px"
      mx="auto"
      my="32px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
    >
      <Typography
        // fontFamily="Avenir Next"
        fontWeight={700}
        fontSize="18px"
      >
        Course Builder
      </Typography>
      <Box>
        {/* CUSTOM BUTTON FOR WORKING WITH THE DESIGN */}
        <CustomButton
          startIcon={<FaPlus />}
          variant="filled"
          endIcon={<IoMdArrowDropdown />}
          onClick={() => toggleDropDown(!dropdownOpen)}
        >
          Add
        </CustomButton>
      </Box>
      <Box
        position="absolute"
        width="292px"
        sx={{ background: "#fff", top: "100%", right: "0", transition: "ease 0.5s forwards" }}
        overflow="hidden"
        height={dropdownOpen ? "auto" : 0}
        zIndex={100}
      >
        <DropdownContent variant="main" />
      </Box>
    </Box>
  );
};

export default Header;
