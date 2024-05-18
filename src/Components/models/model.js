import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../store/slices/model";
import { AddLinkModel, CreateModel, EditLinkModel, EditModuleModel } from "./moduleModels";

export const ModelContainer = ({ children }) => {
  return (
    <Box
      top="50%"
      left="50%"
      sx={{ transform: "translate(-50%, -50%)", background: "#fff" }}
      position="absolute"
      borderRadius="12px"
      boxShadow="0 0 18 0 #002e39"
      p={3}
      width="480px"
    >
      {children}
    </Box>
  );
};

const ModelHandler = () => {
  const { modelVariant } = useSelector((s) => s.ModelSlice);

  switch (modelVariant) {
    case "module":
      return <CreateModel />;
    case "editModule":
      return <EditModuleModel />;
    case "link":
      console.log("LLLL");
      return <AddLinkModel />;
    case "editLink":
      return <EditLinkModel />;
  }
};

export const Model = () => {
  const { modelValue } = useSelector((s) => s.ModelSlice);
  const dispatch = useDispatch();
  return (
    <Modal
      open={modelValue}
      onClose={() => dispatch(closeModel())}
    >
      <Box>
        <ModelHandler />
      </Box>
    </Modal>
  );
};
