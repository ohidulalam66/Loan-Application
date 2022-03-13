import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import BusinessDetails from "./Components/Routes/BusinessDetails/BusinessDetails";
import LoanApplicationDetails from "./Components/Routes/LoanApplicationDetails/LoanApplicationDetails";
import PersonalDetails from "./Components/Routes/PersonalDetails/PersonalDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/personalDetails" element={<PersonalDetails />} />
          <Route path="/businessDetails" element={<BusinessDetails />} />
          <Route
            path="/loanApplicationDetails"
            element={<LoanApplicationDetails />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
