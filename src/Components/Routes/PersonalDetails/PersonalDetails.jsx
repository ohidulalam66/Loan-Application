import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const bloodGroup = [
  {
    value: "AB+",
    label: "AB+",
  },
  {
    value: "AB-",
    label: "AB-",
  },
  {
    value: "A+",
    label: "A+",
  },
  {
    value: "A-",
    label: "A-",
  },
  {
    value: "B+",
    label: "B+",
  },
  {
    value: "B-",
    label: "B-",
  },
  {
    value: "O+",
    label: "O+",
  },
  {
    value: "O-",
    label: "O-",
  },
];

const nationalityGroup = [
  {
    value: "Bangladeshi",
    label: "Bangladeshi",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const PersonalDetails = () => {
  const [blood, setBlood] = React.useState("AB+");
  const [nationality, setNationality] = React.useState("Bangladeshi");

  const handleBloodChange = (e) => {
    setBlood(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };
  return (
    <>
      <Typography
        variant="h5"
        sx={{ my: "10px" }}
        style={{ textDecoration: "underline", color: "blue" }}
      >
        Personal Details(1st Applicant)
      </Typography>
      <Container>
        <Typography variant="p" sx={{ fontSize: "18px" }}>
          I am interested in availing a Retail Loan facility from Islami Bank
          Bangladesh Ltd (IBBL). Please find below my loan requirements and
          Personal Details. I also authorize IBBL to contact me in this regard.
        </Typography>
        <form onSubmit="">
          <Grid container>
            <Grid item xs={12} md={6}>
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
                label="Date of Birth"
                type="date"
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
            </Grid>
            <Grid item xs={12} md={6}>
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
                select
                label="Blood Group"
                value={blood}
                onChange={handleBloodChange}
                required
              >
                {bloodGroup.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                select
                label="Nationality"
                value={nationality}
                onChange={handleNationalityChange}
                required
              >
                {nationalityGroup.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Email Address"
                type="text"
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
          <Link to="/businessDetails" style={{ textDecoration: "none" }}>
            <Button variant="outlined" sx={{ color: "red" }}>
              Next
            </Button>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default PersonalDetails;
