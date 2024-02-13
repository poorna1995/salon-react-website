import React from "react";
import { Box, Typography } from "@mui/material";
import MapContainer from "./components/MapContainer";

const AddressSection = () => {
  return (
    <Box
      sx={{
        background: "#E5E5E5",
        maxHeight: "800px",
        minHeight: "600px",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <Typography
        sx={{
          color: "#26344d",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          padding: "30px",
        }}
      >
        Our Address
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingTop: "0",
          minHeight: "500px",
        }}
      >
        <MapContainer />
      </Box>
    </Box>
  );
};

export default AddressSection;
