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
import swal from "sweetalert";

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
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthOfDate, setBirthOfDate] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [blood, setBlood] = React.useState("AB+");
  const [nationality, setNationality] = React.useState("Bangladeshi");

  const personalDetailsData = {
    firstName,
    lastName,
    birthOfDate,
    phoneNumber,
    address,
    email,
    blood,
    nationality,
  };
  const personalDetailsHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/personalDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(personalDetailsData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          swal("Well Done!", "Personal Details Add!", "success");
          e.target.reset();
        } else {
          swal("Sorry!", "Personal Details don't Add!", "error");
        }
      });
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
        <form onSubmit={personalDetailsHandle}>
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
                onChange={(e) => setFirstName(e.target.value)}
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
                onChange={(e) => setLastName(e.target.value)}
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
                onChange={(e) => setBirthOfDate(e.target.value)}
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
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
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
                onChange={(e) => setBlood(e.target.value)}
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
                onChange={(e) => setNationality(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
          </Grid>
          <Button variant="outlined" type="submit" sx={{ color: "green" }}>
            Add
          </Button>
        </form>
        <br />
        <Link to="/businessDetails" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ color: "red" }}>
            Next
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default PersonalDetails;
