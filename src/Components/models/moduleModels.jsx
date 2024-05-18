import { Box, Button, Typography } from "@mui/material";
import { ModelContainer } from "./model";
import { CloseButton, TextfieldWithLabel } from "./buttons";

const ModelHeader = ({ title }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        fontSize="20px"
        fontWeight={700}
        color="#111"
      >
        {title}
      </Typography>
      <CloseButton />
    </Box>
  );
};

const ModelFooter = ({ variant }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="end"
    >
      <Button
        variant="outlined"
        sx={{
          mx: 2,
          borderColor: "#ebebeb",
          color: "#717171",
          textTransform: "capitalize",
          "&:hover": {
            borderColor: "#ebebeb",
            color: "#717171",
            textTransform: "capitalize",
          },
        }}
      >
        Close
      </Button>
      <Button
        variant="filled"
        sx={{
          background: "#008392",
          color: "#fff",
          textTransform: "capitalize",
          "&:hover": {
            background: "#008392",
            color: "#fff",
            textTransform: "capitalize",
          },
        }}
      >
        {variant == "edit" ? "Save changes" : variant == "link" ? "Add" : "Create"}
      </Button>
    </Box>
  );
};

export const CreateModel = () => {
  return (
    <ModelContainer>
      <ModelHeader title="Create new module" />
      <Box py={2}>
        <TextfieldWithLabel label="Module Name" />
      </Box>
      <ModelFooter />
    </ModelContainer>
  );
};

export const EditModuleModel = () => {
  return (
    <ModelContainer>
      <ModelHeader title="Edit module" />
      <Box py={2}>
        <TextfieldWithLabel label="Module Name" />
      </Box>
      <ModelFooter variant="edit" />
    </ModelContainer>
  );
};

export const AddLinkModel = () => {
  return (
    <ModelContainer>
      <ModelHeader title="Add new link" />
      <Box py={2}>
        <TextfieldWithLabel label="URL" />
        <TextfieldWithLabel label="Display Name" />
      </Box>
      <ModelFooter variant="link" />
    </ModelContainer>
  );
};

export const EditLinkModel = () => {
  return (
    <ModelContainer>
      <ModelHeader title="Edit link" />
      <Box py={2}>
        <TextfieldWithLabel label="URL" />
        <TextfieldWithLabel label="Display Name" />
      </Box>
      <ModelFooter variant="edit" />
    </ModelContainer>
  );
};
