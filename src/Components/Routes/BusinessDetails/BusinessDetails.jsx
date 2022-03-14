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
import swal from "sweetalert";

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
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [BusinessName, setBusinessName] = React.useState("");
  const [type, setType] = React.useState("Shop/Cafe");
  const [gstNo, setGstNo] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [message, setMessage] = React.useState("");

  const businessDetailsData = {
    firstName,
    lastName,
    BusinessName,
    type,
    gstNo,
    address,
    phoneNo,
    message,
  };

  const BusinessDetailsHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/businessDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(businessDetailsData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          swal("Well Done!", "Business Details Add!", "success");
          e.target.reset();
        } else {
          swal("Sorry!", "Business Details don't Add!", "error");
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
        Business Details
      </Typography>
      <Container>
        {/* <Typography variant="p" sx={{ fontSize: "18px" }}>
          I am interested in availing a Retail Loan facility from Islami Bank
          Bangladesh Ltd (IBBL). Please find below my loan requirements and
          Personal Details. I also authorize IBBL to contact me in this regard.
        </Typography> */}
        <form onSubmit={BusinessDetailsHandle}>
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
                label="Applicant’s Business Name"
                type="text"
                onChange={(e) => setBusinessName(e.target.value)}
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
                onChange={(e) => setType(e.target.value)}
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
                onChange={(e) => setGstNo(e.target.value)}
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
                label="Phone Number"
                type="number"
                onChange={(e) => setPhoneNo(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </Grid>
          </Grid>
          <Button
            variant="outlined"
            type="submit"
            sx={{ color: "green", mr: "5px" }}
          >
            Add
          </Button>
        </form>
        <br />
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
