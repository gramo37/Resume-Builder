import React, { useState, useEffect } from 'react'
import MyStepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux"
import '../Form.css'

import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';
import Dropdown from '../../Dropdown/Dropdown';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProjectModal from '../../Modal/Projects/ProjectModal';

const Projects = (props) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const appendData = async (data) => {
        console.log(data)
        let temp = []
        for (let index = 0; index < details.projects.length; index++) {
            const item = details.projects[index];
            temp.push(item)
        }
        temp.push(data)
        // seteducationalDetails(temp)
        // Store these details to localStorage
        await setDetails({ ...details, projects: temp })

    }

    const deleteData = async (index) => {
        let temp = []
        for (let index = 0; index < details.projects.length; index++) {
            const item = details.projects[index];
            temp.push(item)
        }
        temp.splice(index, 1)
        await setDetails({ ...details, projects: temp })
    }

    const [showModal, setShowModal] = useState(false)

    const [details, setDetails] = useState({
        ...info.data,
        projects: info.data.projects ? info.data.projects : [],
    })

    useEffect(async () => {
        await dispatch(storeInfoAction(details))
        await dispatch(pdfAction(details))
    }, [details])

    const showModalFunc = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }

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

    return (
        <>
            <MyStepper active={4} changeState={props.changeState}/>
            <form className='form-container' onChange={updateForm}>
                <div className="educationDetails-info">
                    {/* Show all info here in dropdown fashion */}
                    {details.projects.map((item, index) => {
                        console.log(item)
                        let data = {
                            upper: [{
                                displayFormat: "Project Name",
                                displayData: item.projectName
                            }],
                            lower: [{
                                displayFormat: "Tech Stacks",
                                displayData: item.techstacks
                            },
                            {
                                displayFormat: "Brief Info",
                                displayData: item.briefInfo
                            }
                            ]
                        }
                        return <Dropdown key={index} index={index} data={data} deleteData={deleteData} />
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
            {showModal && <ProjectModal appendData={appendData} closeModal={() => setShowModal(!showModal)} />}
        </>
    )
}

export default Projects