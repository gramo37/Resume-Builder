import React, { useState, useEffect } from 'react'
import Adder from '../../Adder/Adder';
import MyStepper from '../../Stepper/MyStepper';
import { useSelector, useDispatch } from 'react-redux'
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const Skills = (props) => {

  const dispatch = useDispatch()
  const info = useSelector(state => state.info)

  const [skills, setSkills] = useState(info?.data?.skills ? info?.data?.skills : {})

  useEffect(async () => {
    await dispatch(storeInfoAction({ ...info.data, skills: skills }))
    await dispatch(pdfAction({ ...info.data, skills: skills }))
  }, [skills])


  const appendData = async (data, entityName) => {
    console.log(data)
    console.log(skills)
    if(entityName == "Proficient") await setSkills({ ...skills, proficient: data })
    else if(entityName == "Familiar") await setSkills({ ...skills, familiar: data })
  }

  const deleteMe = async (index, entityName) => {
    // Delete that indexth number of the array depending upon the entityName
    console.log(index, entityName)
    console.log(skills)
    let tempProf = []
    for (let i = 0; i < skills?.proficient.length; i++) {
      const element = skills?.proficient[i];
      tempProf.push(element);
    }

    let tempFam = []
    for (let i = 0; i < skills?.familiar.length; i++) {
      const element = skills?.familiar[i];
      tempFam.push(element);
    }

    if(entityName == "Familiar") {
      tempFam.splice(index, 1);
      await setSkills({ ...skills, familiar: tempFam })
    }
    else if(entityName == "Proficient") {
      tempProf.splice(index, 1);
      await setSkills({ ...skills, proficient: tempProf })
    }
  }

  const nextDetails = async (e) => {
    e.preventDefault()
    await dispatch(storeInfoAction({ ...info.data }))
    // console.log(details)
    // await dispatch(pdfAction({ ...info.data }))
    props.nextState()
  }

  const prevDetails = async (e) => {
    e.preventDefault()
    await dispatch(storeInfoAction({ ...info.data }))
    props.prevState()
  }

  return (
    <>
      <MyStepper active={5} changeState={props.changeState}/>
      <form className='form-container'>
        <div className="educationDetails-info">
          Familiar 
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Familiar" data={skills?.familiar ? skills?.familiar : ""} />
          Proficient
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Proficient" data={skills?.proficient ? skills?.proficient : ""} />
        </div>
        <div className='buttons-controller'>
          <button onClick={prevDetails}>PREV</button>
          <button onClick={nextDetails}>NEXT</button>
        </div>
      </form>
    </>
  )
}

export default Skills