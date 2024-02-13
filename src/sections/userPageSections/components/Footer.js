import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as PhoneIcon } from "assets/svg/landing-page/phone.svg";
import { ReactComponent as MailIcon } from "assets/svg/landing-page/mail.svg";
import hivepathLogo from "assets/svg/logo.svg";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/styles";

const Footer = () => {
  const theme = useTheme();
  const { company_logo } =
    useSelector((state) => state.user?.masterCompany) || {};
  const { branches } = useSelector((state) => state?.user) || [];
  let address = "";
  let phoneText = "";
  let emailText = "";
  if (branches && branches.length > 0) {
    const { company_address, phone, email } = branches[0];
    address = company_address;
    phoneText = phone;
    emailText = email;
  }

  return (
    <Box
      sx={{
        background: "#131313",
        padding: "30px",
        padding: "40px 80px",
        [theme.breakpoints.down("sm")]: {
          padding: "20px 10px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "0 auto" }}>
        <Grid container mb={4}>
          <Grid item md={5}>
            <img
              src={company_logo || hivepathLogo}
              style={{ width: "100px", height: "50px" }}
            />
            <Typography
              sx={{
                color: "white",
                opacity: "0.6",
                fontSize: "16px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "12px",
                  marginTop: "10px",
                },
              }}
            >
              {address && address}
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4} ml={{ md: 6, sm: 0 }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "white",
                [theme.breakpoints.down("sm")]: { fontSize: "16px" },
              }}
              mt={2}
            >
              Our Contact Details
            </Typography>

            {phoneText && (
              <Typography
                sx={{
                  color: "white",
                  [theme.breakpoints.down("sm")]: { fontSize: "12px" },
                }}
                mt={2}
              >
                {" "}
                <PhoneIcon style={{ marginRight: "10px" }} /> {phoneText}
              </Typography>
            )}
            {emailText && (
              <Typography
                sx={{
                  color: "white",
                  [theme.breakpoints.down("sm")]: { fontSize: "12px" },
                }}
                mt={2}
              >
                {" "}
                <MailIcon style={{ marginRight: "10px" }} /> {emailText}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Divider style={{ borderColor: "#fff", opacity: "0.2" }} />
        <div>
          <Typography
            mt={2}
            sx={{
              color: "white",
              opacity: "0.5",
              textAlign: "center",
              fontSize: "16px",
              [theme.breakpoints.down("sm")]: { fontSize: "12px" },
            }}
          >
            © 2022. All rights reserved.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
