import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import { useTheme } from "@mui/styles";

export default function ReviewCard({ data }) {
  const theme = useTheme();
  const { review_text, user_image_url, user_name, user_rating } = data;
  return (
    <Card
      sx={{
        // margin: "0",
        margin: "0 40px",
        maxWidth: 345,
        minWidth: "100px",
        boxShadow: "none",
        border: "none",
        height: "300px",
        overflow: "auto",
        padding: "0",
        // padding: "0 10px",
        paddingBottom: "20px",
        flexBasis: "33.33%",
        borderRadius: "10px",
        background: "transparent",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: "300px",
          margin: "10px",
          "& .MuiCardHeader-avatar": {
            marginRight: "0",
          },
          "& .MuiSvgIcon-root": {
            height: "10px",
            width: "10px",
          },
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              width: "60px",
              height: "60px",
              [theme.breakpoints.down("sm")]: {
                width: "40px",
                height: "40px",
              },
            }}
            aria-label="recipe"
            src={user_image_url}
          />
        }
        title={user_name}
        subheader={<Rating name="read-only" value={user_rating} readOnly />}
        sx={{
          color: "#519fe7",
          paddingBottom: "0",
          "& .MuiTypography-root": {
            fontWeight: "800",
            [theme.breakpoints.down("sm")]: { fontSize: "12px" },
          },
        }}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="#121212"
          fontWeight={"500"}
          sx={{ [theme.breakpoints.down("sm")]: { fontSize: "12px" } }}
        >
          {review_text}
        </Typography>
      </CardContent>
    </Card>
  );
}
