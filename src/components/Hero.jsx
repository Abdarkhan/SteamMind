import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = (props) => {
  const { title, onBack } = props;

  const navigate = useNavigate();

  const navigationHandler = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };
  return (
    <Box>
      <Box>
        <IconButton onClick={navigationHandler}>
          <ArrowBack />
        </IconButton>

        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
