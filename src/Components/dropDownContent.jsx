import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { BsArrowBarUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openModel } from "../store/slices/model";
import { FiEdit3 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";

const BuilderDropdown = () => {
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem sx={{ padding: 0 }}>
        <ListItemButton onClick={() => dispatch(openModel("editModule"))}>
          <ListItemIcon>
            <FiEdit3 color="#717171" />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color="#717171"
              fontWeight={500}
            >
              Edit module name
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ padding: 0 }}>
        <ListItemButton>
          <ListItemIcon>
            <HiOutlineTrash color="#d33852" />
          </ListItemIcon>
          <ListItemText>
            <Typography
              color="#d33852"
              fontWeight={500}
            >
              Delete
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

const MainDropdown = () => {
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem sx={{ padding: 0 }}>
        <ListItemButton onClick={() => dispatch(openModel("module"))}>
          <ListItemIcon>
            <BsLayoutThreeColumns style={{ transform: "rotate(90deg)" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography fontWeight={500}>Create Module</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ padding: 0 }}>
        <ListItemButton onClick={() => dispatch(openModel("link"))}>
          <ListItemIcon>
            <FaLink />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ color: "#717171", "&:hover": { color: "#111" } }}>Add a link</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ padding: 0 }}>
        <ListItemButton>
          <ListItemIcon>
            <BsArrowBarUp />
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ color: "#717171", "&:hover": { color: "#111" } }}>Upload</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

const DropdownHandler = ({ variant }) => {
  console.log(variant);
  switch (variant) {
    case "main":
      return <MainDropdown />;
    case "builder":
      return <BuilderDropdown />;
  }
};

const DropdownContent = ({ variant }) => {
  return (
    <Box
      boxShadow="0px 5px 10px 0px #002E3926"
      border="1px solid #ebebeb"
      borderRadius="6px"
      my={1}
    >
      <DropdownHandler variant={variant} />
    </Box>
  );
};

export default DropdownContent;
