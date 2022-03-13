import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", background: "#00873F" }}
      >
        Islami Bank Bangladesh Ltd (IBBL)
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{ display: "flex", alignItems: "center" }}
            aria-label="basic tabs example"
          >
            <NavLink
              to="/personalDetails"
              style={{ textDecoration: "none", color: "gray" }}
            >
              <Tab label="Personal Details" />
            </NavLink>
            <NavLink
              to="/businessDetails"
              style={{ textDecoration: "none", color: "gray" }}
            >
              <Tab label="Business details" />
            </NavLink>
            <NavLink
              to="/loanApplicationDetails"
              style={{ textDecoration: "none", color: "gray" }}
            >
              <Tab label="Loan Application details" />
            </NavLink>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
