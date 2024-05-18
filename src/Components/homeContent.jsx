import { Box, Typography } from "@mui/material";
import React from "react";
import HomeAsset from "../assets/mainbg.png";
import { BuilderCard } from "./builderCard";

const HomeContent = () => {
  return (
    <Box
      width="966px"
      margin="auto"
    >
      <BuilderCard />
    </Box>
  );
};

export default HomeContent;
