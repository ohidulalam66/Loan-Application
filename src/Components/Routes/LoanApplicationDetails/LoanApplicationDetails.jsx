import {
  Box,
  Button,
  Container,
  Slider,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
// import Fab from "@mui/material/Fab";
// import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const LoanApplicationDetails = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [loan, setLoan] = React.useState(50000);
  const [years, setYears] = React.useState(1);
  const [interestRate, setInterestRate] = React.useState(1);

  const number = (9 * 100) / (loan * years);

  const handleTurnOver = (e) => {
    setLoan(e.target.value);
    setInterestRate(number);
  };

  const handleLoanTenure = (e) => {
    setYears(e.target.value);
    setInterestRate(number);
  };

  const loanApplicationDetailsData = {
    firstName,
    lastName,
    phoneNumber,
    loan,
    years,
    interestRate,
  };

  const loanApplicationDetailsHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/loanApplicationDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loanApplicationDetailsData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          swal("Well Done!", "Loan Application Details Add!", "success");
          e.target.reset();
        } else {
          swal("Sorry!", "Loan Application Details don't Add!", "error");
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
        Loan Application Details
      </Typography>
      <Container>
        <form onSubmit={loanApplicationDetailsHandle}>
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
                label="Phone Number"
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <Box
                sx={{
                  my: "15px",
                  width: "95%",
                }}
              >
                <Typography variant="h6" sx={{}}>
                  Loan Amount (BDT)
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    border: "1px solid #2787C1",
                    borderRadius: "10px",
                    py: "2px",
                    px: "4px",
                  }}
                >
                  UP TO BDT {loan}
                </Typography>
                <Slider
                  onChange={handleTurnOver}
                  sx={{ mb: "15px" }}
                  step={50000}
                  marks
                  min={50000}
                  max={500000}
                />
              </Box>
              <TextField
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: "15px",
                  width: "95%",
                }}
                label="Interest Rate(9%)"
                type="number"
                value={interestRate}
                disabled
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
                label="Last Name"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              {/* <Typography variant="p" color="gray">
                Upload files of documents in your place(png/jpg):
              </Typography>
              <br />
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab> */}
              <Box
                sx={{
                  my: "15px",
                  width: "95%",
                }}
              >
                <Typography variant="h6">Loan Tenure(Years)</Typography>
                <Typography
                  variant="p"
                  sx={{
                    border: "1px solid #2787C1",
                    borderRadius: "10px",
                    py: "2px",
                    px: "4px",
                  }}
                >
                  UP TO Years {years}
                </Typography>
                <Slider
                  onChange={handleLoanTenure}
                  sx={{ mb: "15px" }}
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </Box>
            </Grid>
          </Grid>
          <Button variant="outlined" type="submit" sx={{ color: "green" }}>
            Add
          </Button>
        </form>
        <br />
        <Link to="/businessDetails" style={{ textDecoration: "none" }}>
          <Button variant="outlined" sx={{ color: "red" }}>
            Previous
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default LoanApplicationDetails;
