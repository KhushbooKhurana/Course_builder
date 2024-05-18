import { Box } from "@mui/material";
import Header from "./Components/header";
import HomeContent from "./Components/homeContent";
import { Model } from "./Components/models/model";

function App() {
  return (
    <Box>
      <Header />
      <HomeContent />
      <Model />
    </Box>
  );
}

export default App;
