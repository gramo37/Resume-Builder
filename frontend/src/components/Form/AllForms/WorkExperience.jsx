import React, { useState, useEffect } from 'react'
import MyStepper from '../../Stepper/MyStepper'
import Dropdown from '../../Dropdown/Dropdown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WorkExperienceModal from '../../Modal/WorkExperience/WorkExperienceModal';
import { useDispatch, useSelector } from "react-redux"
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const WorkExperience = (props) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const [showModal, setShowModal] = useState(false)

    const [details, setDetails] = useState({
        ...info.data,
        workExperience: info.data.workExperience ? info.data.workExperience : [],
    })

    const showModalFunc = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }
    
    useEffect(async () => {
        await dispatch(storeInfoAction(details))
        console.log(details)
        await dispatch(pdfAction(details))
    }, [details])

    const nextDetails = async (e) => {
        e.preventDefault()
        await dispatch(storeInfoAction(details))
        console.log(details)
        await dispatch(pdfAction(details))
        props.nextState()
    }

    const updateForm = async (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const prevDetails = async (e) => {
        e.preventDefault()
        await dispatch(storeInfoAction(details))
        props.prevState()
    }

    const appendData = async (data) => {
        console.log(data)
        let temp = []
        for (let index = 0; index < details.workExperience.length; index++) {
            const item = details.workExperience[index];
            temp.push(item)
        }
        temp.push(data)
        // Store these details to localStorage
        await setDetails({ ...details, workExperience: temp })

    }

    const deleteData = async (index) => {
        let temp = []
        for (let index = 0; index < details.workExperience.length; index++) {
            const item = details.workExperience[index];
            temp.push(item)
        }
        temp.splice(index, 1)
        await setDetails({ ...details, workExperience: temp })
    }

    return (
        <>
            <MyStepper active={3} changeState={props.changeState} />
            <form className='form-container' onChange={updateForm}>
                <div className="educationDetails-info">
                    {/* Show all info here in dropdown fashion */}
                    {details.workExperience.map((item, index) => {
                        let data = {
                            upper: [{
                                displayFormat: "",
                                displayData: item.CompanyName
                            }],
                            lower: [
                                {
                                    displayFormat: "Designation",
                                    displayData: item.designation
                                }, {
                                    displayFormat: "Location",
                                    displayData: item.Location
                                },
                                {
                                    displayFormat: "Description",
                                    displayData: item.Description
                                },
                                {
                                    displayFormat: "Duration",
                                    displayData: item.duration
                                }
                            ]
                        }
                        return <Dropdown key={index} deleteData={deleteData} index={index} data={data} />
                    })}
                </div>
                {/* This button will trigger a modal */}
                <div className='AddBtn'>
                    <div onClick={showModalFunc}><AddCircleOutlineIcon /></div>
                </div>
                <div className='buttons-controller'>
                    <button onClick={prevDetails}>PREV</button>
                    <button onClick={nextDetails}>NEXT</button>
                </div>
            </form>
            {/* Modal comes here */}
            {showModal && <WorkExperienceModal appendData={appendData} closeModal={() => setShowModal(!showModal)} />}
        </>
    )
}

export default WorkExperience