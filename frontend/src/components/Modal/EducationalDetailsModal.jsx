import React, { useState, useEffect } from 'react'
import './educationDetailsModal.css'
import CloseIcon from '@mui/icons-material/Close';

const EducationalDetailsModal = (props) => {

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
    temp.degree = details?.degree
    temp.location = details?.location
    temp.collegename = details?.collegename
    temp.grade = details?.grade
    temp.duration = details?.fromDate + `${isPresent ? " to present" : details?.toDate}`
    props.appendData(temp)
    closeModal()
  }

  const onChangeHandler = (e) => {
    setDetails({...details, [e.target.name]: e.target.value})
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
              Educational Details
            </h2>
            <div className="modalRow">
              <div>
                <input name="degree" type="text" onChange={onChangeHandler} />
                <span>Degree</span>
              </div>
              <div>
                <input name="location" type="text" onChange={onChangeHandler} />
                <span>Location</span>
              </div>
            </div>
            <div className="modalRow">
              <div>
                <input name="collegename" type="text" onChange={onChangeHandler} />
                <span>College Name</span>
              </div>
              <div>
                <input name="grade" type="text" onChange={onChangeHandler} />
                <span>Grade</span>
              </div>
            </div>
            <div className="modalRow">
              <div className='modalDuration'>
                <label>From</label>
                <input name="fromDate" onChange={onChangeHandler}  type="date" />
                <div id='modalCheckbox2' style={{opacity: 0}}>
                  <label>Present</label>
                </div>
              </div>
              <div className='modalDuration'>
                <label>To</label>
                <input name="toDate" onChange={onChangeHandler}  type="date" style={{display: `${!isPresent ? "block" : "none"}`}}/>
                <div id='modalCheckbox'>
                  <input type="checkbox" onChange={() => setIsPresent(!isPresent)} defaultChecked={isPresent}/>
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

export default EducationalDetailsModal