import { Box, Typography } from "@mui/material";
import { centeredStyles } from "../Sections/Perks/Perks";
import { ISocialMedia } from "../../Types/Types";

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
        {/* Apply filter if the prop is true */}
        {React.cloneElement(svg, {
          className: filter ? "filter" : "", // Apply the filter class if the filter is true
        })}
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
