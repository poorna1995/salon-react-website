import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import { ReactComponent as Banner } from "assets/svg/landing-page/headBg.svg";
import banner from "assets/svg/landing-page/headBg.svg";
import RoundCornersButton from "components/common/Buttons/RoundCornersButton";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

const LandingPageBanner = () => {
  const company_domain = window.location.pathname.split("/")[1];

  const theme = useTheme();
  const mobileView = theme.breakpoints.down("sm");
  const matches = useMediaQuery(mobileView);
  const navigate = useNavigate();
  const navigateSalon = () => {
    navigate(`//booking.hivepath.io/${company_domain}`);
  };
  return (
    <Box
      sx={{
        // display: "grid",
        height: "80vh",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: matches ? "right" : "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "80vh",
          background: "black",
          opacity: "0.5",
        }}
      ></div>

      <Box
        sx={{
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ minWidth: { md: "1200px" } }}>
          <Grid container>
            <Grid
              item
              md={7}
              pl={{ md: 20 }}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "64px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "32px",
                  },
                }}
              >
                SELF CONFIDENCE GROOMING LIFESTYLE
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.2",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "14px",
                    marginBottom: "50px",
                  },
                }}
                mt={1}
                mb={2}
              >
                Trust the most caring hands and best expertise for it.{" "}
                {!matches && <br />}
                Our world class products and well qualified staff is ready to
                pamper you
              </Typography>

              <RoundCornersButton
                title={"Book Appointment"}
                onClick={navigateSalon}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPageBanner;
