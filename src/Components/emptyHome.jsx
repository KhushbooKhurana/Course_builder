import { Box } from "@mui/material";
import React from "react";

const EmptyHome = () => {
  return (
    <Box>
      <Box textAlign="center">
        <img src={HomeAsset} />
      </Box>
      <Box
        textAlign="center"
        padding={2}
      >
        <Typography fontWeight={700}>Nothing added here yet</Typography>
        <Typography color="#222222">Click on the [+] Add button to add items to this course</Typography>
      </Box>
    </Box>
  );
};

export default EmptyHome;
