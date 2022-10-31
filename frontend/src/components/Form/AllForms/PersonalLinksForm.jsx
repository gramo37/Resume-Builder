import React, { useState } from 'react'
import MyStepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux";
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const PersonalLinksForm = (props) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const [details, setDetails] = useState({
        github: info?.data?.github ? info?.data?.github : "",
        linkedin: info?.data?.linkedin ? info?.data?.linkedin : "",
        twitter: info?.data?.twitter ? info?.data?.twitter : "",
        personalWebsite: info?.data?.personalWebsite ? info?.data?.personalWebsite : ""
    });

    const onChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const nextDetails = async (e) => {
        e.preventDefault()
        let temp = { ...info.data }
        temp.github = details.github
        temp.linkedin = details.linkedin
        temp.twitter = details.twitter
        temp.personalWebsite = details.personalWebsite

        // Store the details in local storage
        console.log(temp)
        await dispatch(storeInfoAction(temp))
        // Display it on the pdf container
        // await dispatch(pdfAction(temp))
        props.nextState()
    }

    const prevDetails = async () => {
        props.prevState()
    }

    return (
        <>
            <MyStepper active={1} changeState={props.changeState}/>

            <form className='form-container' onChange={onChange}>
                <div className="basic-info">
                    <input type="text" name='github' value={details.github} placeholder='Github' />
                    <input type="text" name='linkedin' value={details.linkedin} placeholder='LinkedIn' />
                    <input type="text" name='personalWebsite' value={details.personalWebsite} placeholder='Personal Website' />
                    <input type="text" name='twitter' value={details.twitter} placeholder='Twitter' />
                </div>
                <div className='buttons-controller'>
                    <button onClick={prevDetails}>PREV</button>
                    <button onClick={nextDetails}>NEXT</button>
                </div>
            </form>
        </>
    )
}

export default PersonalLinksForm