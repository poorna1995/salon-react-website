import React from "react";
import bookBg from "assets/svg/landing-page/bookBg.png";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

const BookAppointmentBar = () => {
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("sm");
  const matches = useMediaQuery(mobileView);

  const navigate = useNavigate();
  const company_domain = window.location.pathname.split("/")[1];
  const navigateSalon = () => {
    navigate(`//booking.hivepath.io/${company_domain}`);
  };

  return (
    <Box
      sx={{
        padding: "40px",
        background: "#FAFBFC",
        [theme.breakpoints.down("sm")]: {
          padding: "10px",
        },
      }}
    >
      <Box
        sx={{
          padding: "40px",
          width: "60%",
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          backgroundImage: `url(${bookBg})`,
          backgroundPosition: "center",
          borderRadius: "20px",
          [theme.breakpoints.down("sm")]: {
            backgroundSize: "cover",
            display: "block",
            textAlign: "center",
            width: "80%",
            // height: "80px",
            padding: "20px 40px",
          },
        }}
      >
        <div>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "700",
              [theme.breakpoints.down("sm")]: {
                fontSize: "10px",
              },
            }}
          >
            Let's get you started
          </Typography>
          <Typography
            sx={{
              fontSize: "32px",
              color: "white",
              fontWeight: "700",
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
                marginBottom: "20px",
              },
            }}
          >
            Schedule an Appointment Now
          </Typography>
        </div>
        <Button
          sx={{
            color: "#177FDF",
            borderRadius: "5px",
            background: "white",
            fontWeight: "700",
            height: "60px",
            "&:hover": {
              background: "white",
            },
            [theme.breakpoints.down("sm")]: {
              fontSize: "12px",
              height: "50px",
            },
          }}
          onClick={navigateSalon}
        >
          Book Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default BookAppointmentBar;
