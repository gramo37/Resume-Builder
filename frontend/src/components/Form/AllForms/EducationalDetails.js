import React, { useState, useEffect } from 'react'
import Stepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux"
import '../Form.css'

import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';
import Dropdown from '../../Dropdown/Dropdown';
import EducationalDetailsModal from '../../Modal/EducationalDetailsModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const EducationalDetails = (props) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const appendData = async (data) => {
        console.log(data)
        let temp = []
        for (let index = 0; index < details.educationalDetail.length; index++) {
            const item = details.educationalDetail[index];
            temp.push(item)
        }
        temp.push(data)
        // seteducationalDetails(temp)
        // Store these details to localStorage
        await setDetails({ ...details, educationalDetail: temp })

    }

    const deleteData = async (index) => {
        let temp = []
        for (let index = 0; index < details.educationalDetail.length; index++) {
            const item = details.educationalDetail[index];
            temp.push(item)
        }
        temp.splice(index, 1)
        await setDetails({ ...details, educationalDetail: temp })
    }

    const [showModal, setShowModal] = useState(false)

    const [details, setDetails] = useState({
        ...info.data,
        educationalDetail: info.data.educationalDetail ? info.data.educationalDetail : [],
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
            <Stepper active={1} />
            <form className='form-container' onChange={updateForm}>
                <div className="educationDetails-info">
                    {/* Show all info here in dropdown fashion */}
                    {details.educationalDetail.map((item, index) => {
                        console.log(item)
                        let data = {
                            upper: [{
                                displayFormat: "Degree",
                                displayData: item.degree
                            },{
                                displayFormat: "Grade",
                                displayData: item.grade
                            }],
                            lower: [{
                                displayFormat: "Location",
                                displayData: item.location
                            },
                            {
                                displayFormat: "College Name",
                                displayData: item.collegename
                            },
                            {
                                displayFormat: "duration",
                                displayData: item.duration
                            }
                        ]
                        }
                        return <Dropdown key={index} index={index} data={data}  deleteData={deleteData}/>
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
            {showModal && <EducationalDetailsModal appendData={appendData} closeModal={() => setShowModal(!showModal)} />}
        </>
    )
}

export default EducationalDetails