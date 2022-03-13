import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const businessType = [
  {
    label: "Shop/Cafe",
    value: "Shop/Cafe",
  },
  {
    label: "Lending",
    value: "Lending",
  },
  {
    label: "Store",
    value: "Store",
  },
  {
    label: "Rentals",
    value: "Rentals",
  },
  {
    label: "Others",
    value: "Others",
  },
];

const BusinessDetails = () => {
  const [type, setType] = React.useState("Shop/Cafe");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ my: "10px" }}
        style={{ textDecoration: "underline", color: "blue" }}
      >
        Business Details
      </Typography>
      <Container>
        {/* <Typography variant="p" sx={{ fontSize: "18px" }}>
          I am interested in availing a Retail Loan facility from Islami Bank
          Bangladesh Ltd (IBBL). Please find below my loan requirements and
          Personal Details. I also authorize IBBL to contact me in this regard.
        </Typography> */}
        <form onSubmit="">
          <Grid container>
            <Grid item xs={12} md={6}>
              {/* <Typography variant="h6">Business Owner</Typography> */}
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="First Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Last Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Applicant’s Business Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                select
                label="Business Type"
                value={type}
                onChange={handleTypeChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              >
                {businessType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="GST No"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Present Address (Thana & District name only)"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Phone Number"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <TextareaAutosize
                style={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                placeholder="Message"
                type="textarea"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
          </Grid>
          <Button variant="outlined" sx={{ color: "green", mr: "5px" }}>
            Add
          </Button>
        </form>
        <Link to="/personalDetails" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ color: "red", mr: "5px" }}>
            Previous
          </Button>
        </Link>
        <Link to="/loanApplicationDetails" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ color: "red" }}>
            Next
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default BusinessDetails;
