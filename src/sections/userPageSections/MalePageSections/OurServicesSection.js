import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceTabs from "./components/ServiceTabs";
import { useTheme } from "@mui/styles";

const OurServicesSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // background: "#FAFBFC",
        maxHeight: "800px",
        maxWidth: "1440px",
        overflow: "hidden",
        padding: "0 80px",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
          padding: "0",
        },
      }}
    >
      <Typography
        sx={{
          color: "#26344d",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          padding: "30px",
          textAlign: "center",
          [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
            padding: "10px",
          },
        }}
      >
        Our Services
      </Typography>

      <ServiceTabs />
    </Box>
  );
};

export default OurServicesSection;
