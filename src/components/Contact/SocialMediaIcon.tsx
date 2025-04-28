import { Box, Typography } from "@mui/material";
import { centeredStyles } from "../Sections/Perks/Perks";
import { ISocialMedia } from "../../Types/Types";
import React from "react";

const SocialMediaIcon = ({ title, svg, href, filter }: ISocialMedia) => {
  return (
    <Box
      component="a"
      target="_blank"
      rel="noreferrer"
      href={href}
      sx={{
        my: ".5em",
        maxWidth: "150px",
        transition: ".2s ease",
        ...centeredStyles,
        width: { xs: "50%", sm: "25%" },
        margin: "0 auto",
        textDecoration: "none", // important
      }}
    >
      <Box
        sx={{
          ...centeredStyles,
          width: { xs: "35px" },
          height: { xs: "35px" },
        }}
      >
        {/* Directly render the React component (SVG) */}
        {svg}
      </Box>
      <Typography
        variant="h3"
        sx={{
          pt: ".25em",
          fontSize: { xs: ".75em" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SocialMediaIcon;
