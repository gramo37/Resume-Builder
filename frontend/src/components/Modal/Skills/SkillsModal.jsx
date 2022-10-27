import React, {useState, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';

const SkillsModal = (props) => {

  const [showModal, setshowModal] = useState(false)
    const [details, setDetails] = useState()

    useEffect(() => {
        setshowModal(true)
    }, [])

    const submitInfo = (e) => {
        e.preventDefault()
        console.log(details)
        // Check if all data is filled or not
        let temp = {}
        temp.programmingLangs = details?.programmingLangs
        temp.librariesOrFrameworks = details?.librariesOrFrameworks
        temp.toolsOrPlatforms = details?.toolsOrPlatforms
        temp.databases = details?.databases
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
              Projects
            </h2>
            <div className="modalRow">
              <div>
                <input name="programmingLangs" type="text" onChange={onChangeHandler} />
                <span>Programming Languages</span>
              </div>
            </div>
            <div className="modalRow">
              <div>
                <input name="librariesOrFrameworks" type="text" onChange={onChangeHandler} />
                <span>Libraries or FrameWorks</span>
              </div>
            </div>
            <div className="modalRow">
              <div>
                <input name="toolsOrPlatforms" type="text" onChange={onChangeHandler} />
                <span>Tools Or Platforms</span>
              </div>
            </div>
            <div className="modalRow">
              <div>
                <input name="databases" type="text" onChange={onChangeHandler} />
                <span>Databases</span>
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

export default SkillsModal