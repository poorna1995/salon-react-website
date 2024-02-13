import { Divider, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/styles";

const ServiceListItem = ({ data }) => {
  const theme = useTheme();
  const { service_name, service_meta } = data;
  const { service_price } = service_meta;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          // marginRight: "5px",
          textAlign: "left",
          width: "30%",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        }}
      >
        {service_name}
      </Typography>
      <Divider style={{ minWidth: "50%", marginRight: "10px" }} />
      <Typography
        sx={{
          color: "#121212",
          opacity: "0.5",
          [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
          },
        }}
      >
        ₹{service_price}
      </Typography>
    </Box>
  );
};

export default ServiceListItem;
