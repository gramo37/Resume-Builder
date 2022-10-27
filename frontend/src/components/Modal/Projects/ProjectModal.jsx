import React, {useState, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ProjectModal = (props) => {

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
        temp.projectName = details?.projectName
        temp.techstacks = details?.techstacks
        temp.briefInfo = details?.briefInfo
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
                                <input name="projectName" type="text" onChange={onChangeHandler} />
                                <span>Project Name</span>
                            </div>
                        </div>
                        <div className="modalRow">
                            <div>
                                <input name="techstacks" type="text" onChange={onChangeHandler} />
                                <span>Tech Stacks</span>
                            </div>
                        </div>
                        <div className="modalRow">
                            <div>
                                <input name="briefInfo" type="text" onChange={onChangeHandler} />
                                <span>Brief Info </span>
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

export default ProjectModal