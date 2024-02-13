import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ServiceListItem from "./ServiceListItem";
import servicePlaceholder from "assets/svg/landing-page/servicePlaceholder.svg";
import servicePlaceholder2 from "assets/svg/landing-page/servicePlaceholder2.svg";
import { useSelector } from "react-redux";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTabs-root": {
      background: "white",
      boxShadow: "0px 15px 40px rgba(231, 231, 231, 0.4)",
      border: "none",
      borderRadius: "10px",
      paddingLeft: "20px",
      "& .Mui-selected": { fontWeight: "800", color: "black" },
    },
    "& .MuiButtonBase-root": {
      textTransform: "none",
      fontWeight: "500",
      fontSize: "16px",
      color: "black",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, theme, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            [theme.breakpoints.down("sm")]: {
              paddingTop: "0",
              paddingBottom: "0",
            },
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ServiceTabs() {
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("sm");
  const matches = useMediaQuery(mobileView);

  const categories = useSelector((state) => state.user?.categories) || [];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={classes.root}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {categories.map((item, index) => (
            <Tab
              label={item.category_name}
              {...a11yProps(index)}
              key={`tab${index}`}
            />
          ))}
        </Tabs>
      </Box>
      {categories.map((item, index) => {
        const { service_list } = item;
        return (
          <TabPanel
            value={value}
            index={index}
            key={`tabpanel${index}`}
            theme={theme}
          >
            <Grid
              container
              maxWidth={"1220px"}
              sx={{
                margin: "0 auto",
              }}
            >
              {!matches && (
                <Grid item md={6}>
                  <Box
                    sx={{
                      position: "relative",
                      "& img": { position: "absolute" },
                    }}
                  >
                    <img
                      src={servicePlaceholder}
                      alt="placeholder"
                      style={{ zIndex: "3", left: "0" }}
                    />
                    <img
                      src={servicePlaceholder2}
                      alt="placeholder"
                      style={{ top: "100px", left: "170px" }}
                    />
                  </Box>
                </Grid>
              )}
              <Grid
                item
                md={6}
                mt={3}
                xs={12}
                sx={{
                  maxHeight: "70vh",
                  overflow: "auto",
                  paddingBottom: "20vh",
                  [theme.breakpoints.down("sm")]: {
                    paddingBottom: "10px",
                  },
                }}
              >
                {service_list.map((sItem, sIndex) => (
                  <ServiceListItem data={sItem} key={`serviceItem${sIndex}`} />
                ))}
              </Grid>
            </Grid>
          </TabPanel>
        );
      })}
    </Box>
  );
}
