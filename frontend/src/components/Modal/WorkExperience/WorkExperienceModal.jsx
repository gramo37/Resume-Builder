import React, {useState, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';

const WorkExperienceModal = (props) => {

    const [showModal, setshowModal] = useState(false)
    const [isPresent, setIsPresent] = useState(false)
    const [details, setDetails] = useState()

    useEffect(() => {
        setshowModal(true)
    }, [])

    const submitInfo = (e) => {
        e.preventDefault()
        console.log(details, isPresent)
        // Check if all data is filled or not
        let temp = {}
        let Techstacks = []
        Techstacks.push(details?.Techstacks)
        temp.CompanyName = details?.CompanyName
        temp.designation = details?.designation
        temp.Location = details?.Location
        temp.Techstacks = Techstacks
        temp.duration = details?.fromDate + `${isPresent ? " to present" : details?.toDate}`
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
                                <input name="Techstacks" type="text" onChange={onChangeHandler} />
                                <span>Tech Stacks</span>
                            </div>
                        </div>
                        <div className="modalRow">
                            <div className='modalDuration'>
                                <label>From</label>
                                <input name="fromDate" onChange={onChangeHandler} type="date" />
                                <div id='modalCheckbox2' style={{ opacity: 0 }}>
                                    <label>Present</label>
                                </div>
                            </div>
                            <div className='modalDuration'>
                                <label>To</label>
                                <input name="toDate" onChange={onChangeHandler} type="date" style={{ display: `${!isPresent ? "block" : "none"}` }} />
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