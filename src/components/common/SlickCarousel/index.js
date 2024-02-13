import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import { ReactComponent as RightArrow } from "assets/svg/general/rightSliderArrow.svg";
import { ReactComponent as LeftArrow } from "assets/svg/general/leftSliderArrow.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .slick-slide": {
      opacity: "0.7",
      borderRadius: "10px",
      paddingBottom: "20px",
      marginBottom: "20px",
      background: "#fff",
    },
    "& .slick-center": {
      opacity: "1",
      boxShadow: "0px 15px 50px rgba(231, 231, 231, 0.5)",
    },
    "& .slick-active": {
      marginRight: "20px",
      [theme.breakpoints.down("sm")]: {
        // marginLeft: "10px",
        // marginRight: "10px",
        margin: "0",
      },
    },
    "& .slick-arrow": {
      top: "52%",
      height: "40px",
      width: "40px",
      [theme.breakpoints.down("sm")]: { top: "105%" },
    },
    "& .slick-prev": {
      left: "48%",
      [theme.breakpoints.down("sm")]: {
        left: "40%",
      },
    },
    "& .slick-next": {
      left: "52%",
      [theme.breakpoints.down("sm")]: {
        left: "55%",
      },
    },
  },
}));

const SlickCarousel = ({ data }) => {
  const classes = useStyles();
  var settings = {
    // className: `${classes.center}`,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className={classes.root} {...settings}>
      {data}
    </Slider>
  );
};

export default SlickCarousel;
