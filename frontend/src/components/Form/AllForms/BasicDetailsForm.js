import React, {useState, useEffect} from 'react';
import MyStepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux"
import '../Form.css'
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const BasicDetailsForm = (props) => {

  const dispatch = useDispatch()
  const info = useSelector(state=>state.info)

  const [details, setDetails] = useState({
    name:  info?.data?.name ? info?.data?.name : "",
    email: info?.data?.email ? info?.data?.email : "",
    address: info?.data?.address ? info?.data?.address : "",
    mobile: info?.data?.mobile ? info?.data?.mobile : ""
  })

  const updateForm = async (e) => {
    setDetails({...details, [e.target.name]:e.target.value})
  }

  const nextDetails = async (e) => {
    e.preventDefault()
    console.log(details)
    // edit details and then send it
    let temp = {...info.data}
    temp.name = details.name
    temp.email = details.email
    temp.address = details.address
    temp.mobile = details.mobile

    // setDetails({...details, fullName: temp.fullName, addressAndPhone: addressAndPhone})

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
      <MyStepper active={0} changeState={props.changeState}/>

      <form className='form-container' onChange={updateForm}>
        <div className="basic-info">
          <input type="text" name='name' value={details.name} placeholder='Name' />
          <input type="text" name='email' value={details.email} placeholder='Email'/>
          <input type="text" name='address' value={details.address} placeholder='Address'/>
          <input type="number" name='mobile' value={details.mobile} placeholder='Phone'/>
        </div>
        <div className='buttons-controller'>
          <button disabled onClick={prevDetails}>PREV</button>
          <button onClick={nextDetails}>NEXT</button>
        </div>
      </form>
    </>
  )
}

export default BasicDetailsForm