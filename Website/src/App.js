import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadingsComponent from "./ReadingsComponent";
import LoginComponent from "./LoginComponent";
import LimitsComponent from "./LimitsComponent";
import LogTableComponent from './LogTableComponent';
import NavBarComponent from './NavBarComponent';
import FooterComponent from "./FooterComponent";
import NotFoundPageComponent from "./NotFoundPageComponent";

const App = () => {

  // The data array is passed as a prop to the LogTableComponent
  const data = [
    {
      date: '2023-05-15',
      temperature: '23°C',
      humidity: '65%',
      co2: '400 ppm',
      comment: 'None',
    },
    {
      date: '2023-05-16',
      temperature: '28°C',
      humidity: '85%',
      co2: '400 ppm',
      comment: 'Critical',
    },
    {
      date: '2023-05-17',
      temperature: '19°C',
      humidity: '45%',
      co2: '300 ppm',
      comment: 'Too low',
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/LoginComponent" element={<LoginComponent />} />
          <Route path="/LimitsComponent" element={<LimitsComponent />} />
          <Route path="/ReadingsComponent" element={<ReadingsComponent />} />
          <Route path="/LogTableComponent" element={<LogTableComponent data={data} />} />
          <Route path="/NotFoundPageComponent" element={<NotFoundPageComponent />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
};

export default App;





