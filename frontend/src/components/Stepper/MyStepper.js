import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./stepper.css"

const MyStepper = (props) => {

    const { active, changeState } = props
    
    const steps = [
        'Personal Details',
        'Personal Links',
        'Educational Details',
        'Work Experience',
        'Projects',
        'Skills',
        'Extracurricular Activities'
    ];

    const navigate = (label, index) => {
        console.log(label, index)
        changeState(index)
    }

    return (
        <>
            {/* <Box sx={{ width: '100px' }}> */}
            <div className="boxContainer" >
                <Stepper activeStep={active} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label} onClick={() => navigate(label, index)}>
                            <StepLabel style={{cursor: "pointer"}} >{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
            {/* </Box> */}
        </>
    )
}

export default MyStepper