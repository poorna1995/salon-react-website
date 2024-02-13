import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import hivepathLogo from "../../assets/svg/logo.svg";
import { useTheme } from "@mui/styles";
import RoundCornersButton from "../common/Buttons/RoundCornersButton";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  appbar: {
    boxShadow: " 0px 0px 3px rgba(0, 0, 0, 0.25) !important",
    background: "#fff !important",
    height: "80px",
    // maxWidth: "1440px",

    paddingTop: "8px",
    // paddingBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      height: "72px",
    },
  },
  navigation: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px",
    },
    // flexDirection: "row",
  },
  icon: {
    // background: "rgba(243, 243, 243, 1)",
    marginLeft: theme.spacing(1),
  },
  explore: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grow: {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  hideOnMobileNavigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logo: {
    width: "160px",
    height: "60px",
    marginLeft: "-24px",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "160px",
      height: "36px",
    },
  },
  viewMore: {
    color: theme.palette.primary.main,
  },
  navLink: {
    marginRight: "50px",
    textDecoration: "none",
    color: "#131313",
    fontWeight: "400",
  },
}));

const NoAuthAppHeader = ({ isAdmin, height, position }) => {
  const company_domain = window.location.pathname.split("/")[1];
  const { company_logo } =
    useSelector((state) => state.user?.masterCompany) || {};
  const navigate = useNavigate();
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("md");
  const matches = useMediaQuery(mobileView);
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const navigateSalon = () => {
    navigate(`//booking.hivepath.io/${company_domain}`);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appbar}
        position="fixed"
        style={{ height: height, position: position }}
        elevation={0}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box className={classes.navigation}>
            <>
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link to={`/`}>
                  <img
                    src={company_logo || hivepathLogo}
                    alt="Logo"
                    className={classes.logo}
                    style={{}}
                  />
                </Link>
              </div>
            </>

            <div className={classes.grow} />

            <>
              {/* <Link to="#" className={classes.navLink}>
                Home
              </Link>
              <Link to="#" className={classes.navLink}>
                Our Team
              </Link>
              <Link to="#" className={classes.navLink}>
                Works
              </Link>
              <Link to="#" className={classes.navLink}>
                Reach Us
              </Link> */}

              <RoundCornersButton
                title="Book Appointment"
                onClick={navigateSalon}
                sx={{ [theme.breakpoints.down("sm")]: { fontSize: "10px" } }}
              />
            </>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NoAuthAppHeader;
