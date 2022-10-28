import React, { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const WorkExperienceModal = (props) => {

    const [showModal, setshowModal] = useState(false)
    const [isPresent, setIsPresent] = useState(false)
    const [details, setDetails] = useState()
    const [description, setDescription] = useState([])
    const [changeState, setChangeState] = useState(true)

    useEffect(() => {
        setshowModal(true)
    }, [])

    useEffect(() => {
        // setshowModal(true)
        console.log("")
    }, [changeState])

    const submitInfo = (e) => {
        e.preventDefault()
        console.log(details, isPresent)
        // Check if all data is filled or not
        let temp = {}
        let temp2 = []

        for (let i = 0; i < description.length; i++) {
            const element = description[i];
            temp2.push(element.value);
        }

        temp.CompanyName = details?.CompanyName
        temp.designation = details?.designation
        temp.Location = details?.Location
        temp.description = temp2
        temp.duration = details?.fromDate + ' - ' + `${isPresent ? "present" : details?.toDate}`
        props.appendData(temp)
        closeModal()
    }

    const onChangeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const closeModal = () => {
        setshowModal(false)
        setTimeout(function () {
            props.closeModal()
        }, 400);
    }

    const addInputRow = () => {
        if (description.length >= 5) return;
        description.push({
            id: `job-description-box-${description.length}`,
            value: ""
        })
        setChangeState(!changeState);
    }

    const descriptionBoxChanged = (id, e) => {
        for (let i = 0; i < description.length; i++) {
            const element = description[i];
            if(element.id == id) {
                element.value = e.target.value;
            }
        }
        setChangeState(!changeState);
    }

    return (
        <>
            <div className="modalContainer">
                <div className={`modalBox ${!showModal ? "modalBoxClose" : "modalBoxOpen"}`}>
                    <div className="formBox">
                        <h2>
                            Work Experience
                        </h2>
                        <div className="modalRow">
                            <div>
                                <input name="CompanyName" type="text" onChange={onChangeHandler} />
                                <span>Company Name</span>
                            </div>
                            <div>
                                <input name="designation" type="text" onChange={onChangeHandler} />
                                <span>Designation</span>
                            </div>
                        </div>
                        <div className="modalRow">
                            <div>
                                <input name="Location" type="text" onChange={onChangeHandler} />
                                <span>Location</span>
                            </div>
                            <div>
                                <div className='job-description-box'>
                                    {description.map((item) => {
                                        return <input value={item.value} id={item.id} placeholder='Describe your duties in brief' onChange={(e) => descriptionBoxChanged(item.id, e)} />
                                    })}
                                    <button className='job-description-button' onClick={addInputRow}>Add Description</button>
                                </div>
                            </div>
                        </div>
                        <div className="modalRow">
                            <div className='modalDuration'>
                                <label>From</label>
                                <input name="fromDate" onChange={onChangeHandler} type="month" />
                                <div id='modalCheckbox2' style={{ opacity: 0 }}>
                                    <label>Present</label>
                                </div>
                            </div>
                            <div className='modalDuration'>
                                <label>To</label>
                                <input name="toDate" onChange={onChangeHandler} type="month" style={{ display: `${!isPresent ? "block" : "none"}` }} />
                                <div id='modalCheckbox'>
                                    <input type="checkbox" onChange={() => setIsPresent(!isPresent)} defaultChecked={isPresent} />
                                    <label>Present</label>
                                </div>
                            </div>
                        </div>
                        <div className="modalRow">
                            <button id="modalSubmit" onClick={submitInfo}>Submit</button>
                        </div>
                    </div>
                    <div className="closeButton" onClick={closeModal}>
                        <CloseIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkExperienceModal