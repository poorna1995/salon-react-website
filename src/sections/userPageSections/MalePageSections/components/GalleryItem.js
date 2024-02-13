import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

const GalleryItem = ({ image }) => {
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("sm");
  const matches = useMediaQuery(mobileView);
  return (
    <Box
      sx={{
        margin: "10px",
        flex: "0 0 31.333333%",
        height: "400px",
        [theme.breakpoints.down("sm")]: {
          height: "400px",
          width: "100%",
          flex: "none",
          margin: "5px",
        },
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: matches && "5px",
        }}
      />
    </Box>
  );
};

export default GalleryItem;
