import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import GalleryItem from "./components/GalleryItem";
import { ReactComponent as LeftCircle } from "assets/svg/landing-page/leftHalfCircle.svg";
import { ReactComponent as RightCircle } from "assets/svg/landing-page/rightHalfCircle.svg";
import { useSelector } from "react-redux";
import authFetch from "utils/authFetch";
import { CUSTOMER_SERVICES } from "constants/API_URLS";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

const GallerySection = () => {
  const theme = useTheme();
  const mobileView = theme.breakpoints.down("sm");
  const matches = useMediaQuery(mobileView);

  const [gallery, setGallery] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  let galleryItems = gallery;
  if (!viewMore) {
    galleryItems = gallery.slice(0, 9);
  }
  const branches = useSelector((state) => state.user?.branches) || [];
  const fetchGallery = (company_id) => {
    const requestData = { company_id: company_id };
    authFetch(CUSTOMER_SERVICES.FETCH_GALLERY, requestData)
      .then((res) => {
        const { status, message, result } = res;
        if (status === "success") {
          setGallery(result);
        }
      })
      .catch((res) => console.log(res.message));
  };

  useEffect(() => {
    if (branches.length > 0) {
      const company_id = branches[0].company_id;
      fetchGallery(company_id);
    }
  }, [branches]);
  return (
    <Box
      sx={{
        background: "#131313",
        // maxHeight: "800px",
        overflow: "hidden",
        padding: "0 80px",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
          padding: "0 20px",
        },
      }}
    >
      {!matches && (
        <>
          <LeftCircle
            style={{ position: "absolute", left: "0", top: "100px" }}
          />
          <RightCircle
            style={{ position: "absolute", right: "0", bottom: "80px" }}
          />
        </>
      )}
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          padding: "30px",
          paddingBottom: "0",
          [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
          },
        }}
      >
        Gallery
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "50px",
          paddingTop: "0",
          maxWidth: "1440px",
          margin: "0 auto",
          [theme.breakpoints.down("sm")]: {
            padding: "0",
          },
        }}
      >
        {galleryItems.map((item) => (
          <GalleryItem image={item} />
        ))}
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => setViewMore((state) => !state)}
          sx={{
            color: "white",
            textTransform: "none",
            fontSize: "24px",
            [theme.breakpoints.down("sm")]: { fontSize: "16px" },
          }}
        >
          View {viewMore ? "less" : "more"}
        </Button>
      </div>
    </Box>
  );
};

export default GallerySection;
