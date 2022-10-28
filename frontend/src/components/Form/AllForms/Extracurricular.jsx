import React, { useState, useEffect } from 'react'
import Stepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux"
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const Extracurricular = (props) => {

  const dispatch = useDispatch()
  const info = useSelector(state => state.info)
  const [changeState, setChangeState] = useState(true)

  const [details, setDetails] = useState({
    ...info.data,
    extracurriculars: info.data?.extracurriculars ? info.data?.extracurriculars : [],
  })

  const [desc, setDesc] = useState([{
    id: "job-description-box-0",
    value: ""
  }])

  useEffect(async () => {
    console.log(desc)
    let temp = []
    for (let i = 0; i < desc.length; i++) {
      const element = desc[i];
      temp.push(element.value);
    }
    console.log(temp)
    // details.extracurriculars =  temp;
    console.log(details);
    await setDetails({ ...info.data, extracurriculars: [...temp] })
    console.log(details);
    await dispatch(storeInfoAction(details))
  }, [desc, changeState])

  useEffect(() => {
    // if(!info.data?.extracurriculars) return;
    console.log(info.data)
    let temp = []
    for (let i = 0; i < info.data?.extracurriculars?.length; i++) {
      const element = info.data?.extracurriculars[i];
      temp.push({
        id: `job-description-box-${i}`,
        value: element
      })
    }
    setDesc(temp)
  }, [])
  

  const nextDetails = async (e) => {
    e.preventDefault()
    await dispatch(storeInfoAction(details))
    console.log(details)
    await dispatch(pdfAction(details))
    setChangeState(!changeState);
    
    // props.nextState()
  }

  const prevDetails = () => {
    props.prevState()
  }

  const extracurricularBoxChanged = (id, e) => {
    console.log(id)
    let temp = [...desc]
    for (let i = 0; i < temp.length; i++) {
      const element = temp[i];
      if (element.id == id) {
        element.value = e.target.value;
      }
    }
    setDesc(temp)
    setChangeState(!changeState);
  }

  const addInputRow = async (e) => {
    e.preventDefault()
    if (desc.length >= 5) return;
    let temp2 = [...desc]
    temp2.push({
      id: `job-description-box-${desc.length}`,
      value: ""
    })
    setDesc(temp2)
    setChangeState(!changeState);
  }

  return (
    <>
      <Stepper active={6} changeState={props.changeState} />
      <form className='form-container'>
        <div className="skills-info">
          <div>
            <div className='job-description-box'>
              {desc.map((item) => {
                return <input value={item.value} id={item.id} placeholder='Add Activity' onChange={(e) => extracurricularBoxChanged(item.id, e)} />
              })}
              <button className='job-description-button' onClick={addInputRow}>Add Activity</button>
            </div>
          </div>
        </div>
        <div className='buttons-controller'>
          <button onClick={prevDetails}>PREV</button>
          <button onClick={nextDetails}>SUBMIT</button>
        </div>
      </form>
    </>
  )
}

export default Extracurricular