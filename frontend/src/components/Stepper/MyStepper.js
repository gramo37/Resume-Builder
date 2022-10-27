import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./stepper.css"

const MyStepper = (props) => {
    const { active } = props
    const steps = [
        'Personal Details',
        'Educational Details',
        'Work Experience',
        'Projects',
        'Skills',
        'Achievements and other'
    ];
    return (
        <>
            {/* <Box sx={{ width: '100px' }}> */}
            <div className="boxContainer">
                <Stepper activeStep={active} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            {/* </Box> */}
        </>
    )
}

export default MyStepper