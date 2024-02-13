import React from "react";
import UserLayout from "Layouts/UserLayout";
import { Box } from "@mui/material";
import MalePageSections from "sections/userPageSections/MalePageSections";
import { useTheme } from "@mui/styles";

const MalePage = () => {
  const theme = useTheme();
  return (
    <UserLayout title="Home">
      <Box
        sx={{
          marginTop: "80px",
          [theme.breakpoints.down("sm")]: {
            marginTop: "74px",
          },
        }}
      >
        <MalePageSections />
      </Box>
    </UserLayout>
  );
};

export default MalePage;
