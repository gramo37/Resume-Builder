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
    fullName:  info?.data?.fullName ? info?.data?.fullName : "",
    email: info?.data?.addressAndPhone ? info?.data?.addressAndPhone[0] : "",
    address: info?.data?.addressAndPhone ? info?.data?.addressAndPhone[1] : "",
    phone: info?.data?.addressAndPhone ? info?.data?.addressAndPhone[2] : "",
  })

  const updateForm = async (e) => {
    setDetails({...details, [e.target.name]:e.target.value})
  }

  const nextDetails = async (e) => {
    e.preventDefault()
    console.log(details)
    // edit details and then send it
    let temp = {...info.data}
    temp.fullName = details.fullName
    let addressAndPhone = []
    addressAndPhone.push(details.email)
    addressAndPhone.push(details.address)
    addressAndPhone.push(details.phone)
    temp.addressAndPhone = addressAndPhone

    // setDetails({...details, fullName: temp.fullName, addressAndPhone: addressAndPhone})

    // Store the details in local storage
    console.log(temp)
    await dispatch(storeInfoAction(temp))
    // Display it on the pdf container
    await dispatch(pdfAction(temp))
    props.nextState()
  }

  const prevDetails = async () => {
    props.prevState()
  }

  return (
    <>
      <MyStepper active={0} />

      <form className='form-container' onChange={updateForm}>
        <div className="basic-info">
          <input type="text" name='fullName' value={details.fullName} placeholder='Name' />
          <input type="text" name='email' value={details.email} placeholder='Email'/>
          <input type="text" name='address' value={details.address} placeholder='Address'/>
          <input type="number" name='phone' value={details.phone} placeholder='Phone'/>
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