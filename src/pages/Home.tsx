import * as React from "react";
import { Container, Stepper, Step, StepLabel, Box, Button } from "@mui/material";
import theme from "../theme";
import Exchange from "../Components/Exchange";
import Confirm from "../Components/Confirm";
import ComplateTether from "../Components/ComplateTether";
import { useSelector } from 'react-redux';
import ComplatePm from "../Components/ComplatePm";
import type { RootState } from '../redux/store';

export default function Home() {

  const type = useSelector((state: RootState) => state.exchange.exchangeType);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const steps = [
    {
      title: "Exchange",
      description: <Exchange onNext={handleNext}/>
    },
    {
      title: "Confirm",
      description: <Confirm onNext={handleNext}/>
    },
    {
      title: "Complete",
      description: type === "USDT_TO_PM" ? <ComplateTether /> : <ComplatePm />
    }
  ];

  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        sx={{
          "& .MuiStepIcon-root.Mui-active": { color: "#40A578", boxShadow: "0px 4px 10px 0px #40A57880", borderRadius: "50%" },
          "& .MuiStepLabel-label.Mui-active": { color: "#40A578", fontWeight:"700"},
          "& .MuiStepIcon-root.Mui-completed": { color: "#40A578" },
          "& .MuiStepLabel-labelContainer": { color: "#596B89" },
          "& .MuiStepLabel-label.Mui-completed": { color: "#40A578" },
          "& .Mui-active .MuiStepConnector-line": {borderColor: "#40A578",},
          "& .Mui-completed .MuiStepConnector-line": {borderColor: "#40A578",},
          "& .MuiStepConnector-line": { width: "70%", margin: "0 auto", borderColor: "#596B89"},
          backgroundColor: theme.palette.secondary.main,
          padding: "36px 240px",
          mt: "90px",
          borderRadius: "30px",
          color: "#596B89"
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ marginTop:"34px" }}>
        {steps[activeStep].description}
      </Box>

    </Container>
  );
}
