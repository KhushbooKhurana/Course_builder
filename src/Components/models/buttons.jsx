import { Box, IconButton, TextField, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeModel } from "../../store/slices/model";

export const CloseButton = () => {
  const dispatch = useDispatch();
  return (
    <IconButton
      sx={{ p: 0, m: 0 }}
      onClick={() => dispatch(closeModel())}
    >
      <IoCloseOutline
        style={{ padding: 0, margin: 0 }}
        size={28}
      />
    </IconButton>
  );
};

export const TextfieldWithLabel = ({ label, placeholder }) => {
  return (
    <Box my={2}>
      <Typography fontWeight="600">{label}</Typography>
      <TextField
        fullWidth
        variant="outlined"
      />
    </Box>
  );
};
