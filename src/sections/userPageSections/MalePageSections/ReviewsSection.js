import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ReviewCard from "./components/ReviewCard";
import { useSelector } from "react-redux";
import authFetch from "utils/authFetch";
import { CUSTOMER_SERVICES } from "constants/API_URLS";
import SlickCarousel from "components/common/SlickCarousel";
import { useTheme } from "@mui/styles";

const ReviewsSection = () => {
  const theme = useTheme();
  const branches = useSelector((state) => state.user?.branches) || [];
  const [reviews, setReviews] = useState([]);

  const fetchReviews = (company_id) => {
    const requestData = { company_id: company_id };
    authFetch(CUSTOMER_SERVICES.FETCH_REVIEWS, requestData)
      .then((res) => {
        const { status, message, result } = res;
        if (status === "success") {
          // setReviews(result.slice(0, 6));
          const reviews = result.map((item) => <ReviewCard data={item} />);
          setReviews(reviews);
        }
      })
      .catch((res) => console.log(res.message));
  };

  useEffect(() => {
    if (branches.length > 0) {
      const company_id = branches[0].company_id;
      fetchReviews(company_id);
    }
  }, [branches]);

  return (
    <Box
      sx={{
        background: "#FAFBFC",
        maxHeight: "550px",
        overflow: "hidden",
        padding: "0 80px",
        [theme.breakpoints.down("sm")]: {
          padding: "0 10px",
        },
        // textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#26344d",
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          padding: "30px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "24px",
          },
        }}
      >
        Reviews
      </Typography>

      <Box
        sx={{
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: "start",
          paddingTop: "0",
          paddingBottom: "30px",
          maxWidth: "1440px",
          margin: "0 auto",
          minHeight: "400px",
        }}
      >
        {/* {reviews.map((item) => (
          <ReviewCard data={item} />
        ))} */}
        <SlickCarousel data={reviews} />
      </Box>
    </Box>
  );
};

export default ReviewsSection;
