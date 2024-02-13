import Seo from "../../components/Seo";
import { Box } from "@mui/system";
import NoAuthAppHeader from "components/NoAuthAppHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserLayout = ({ title, children }) => {
  return (
    <Box>
      <NoAuthAppHeader isAdmin />
      <Seo title={title} />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: "1", p: "3", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default UserLayout;
