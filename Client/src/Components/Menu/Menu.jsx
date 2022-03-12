import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const Menu = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Loan Application
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{ display: "flex", alignItems: "center" }}
            aria-label="basic tabs example"
          >
            <Tab label="Personal Details" />
            <Tab label="Business details" />
            <Tab label="Application details" />
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
