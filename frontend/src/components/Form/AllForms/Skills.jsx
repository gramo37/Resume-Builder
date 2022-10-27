import React, { useState, useEffect } from 'react'
import Adder from '../../Adder/Adder';
import MyStepper from '../../Stepper/MyStepper';
import { useSelector, useDispatch } from 'react-redux'
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';

const Skills = (props) => {

  const dispatch = useDispatch()
  const info = useSelector(state => state.info)

  const [skills, setSkills] = useState(info?.data?.skills ? info?.data?.skills[0] : {})

  useEffect(async () => {
    let temp = []
    temp.push(skills)
    console.log(temp)
    await dispatch(storeInfoAction({ ...info.data, skills: temp }))
    await dispatch(pdfAction({ ...info.data, skills: temp }))
  }, [skills])


  const appendData = async (data, entityName) => {
    // data is an array
    console.log(data)
    // Convert that array into string
    var temp = data.join(",");
    console.log(temp)
    console.log(entityName)
    if (entityName === "Programming Languages") {
      await setSkills({ ...skills, programmingLangs: temp })
    } else if (entityName === "Libraries or Frameworks") {
      await setSkills({ ...skills, librariesOrFrameworks: temp })
    } else if (entityName === "Tools or Platforms") {
      await setSkills({ ...skills, toolsOrPlatforms: temp })
    } else if (entityName === "Databases") {
      await setSkills({ ...skills, databases: temp })
    }
  }

  const deleteMe = async (index, entityName) => {
    // Delete that indexth number of the array depending upon the entityName
    console.log(index, entityName)
    if (entityName === "Programming Languages") {
      console.log(skills)
      // Convert that string to array
      let temp = skills.programmingLangs.split(',');
      // If the element is the last element, delete the whole key
      if (temp.length === 1) {
        let temp = { ...skills }
        delete temp.programmingLangs;
        await setSkills(temp)
      } else {
        // Splice the indexth term
        temp.splice(index, 1)
        // Convert array to string and set it to skills
        temp = temp.join(",")
        await setSkills({ ...skills, programmingLangs: temp })
      }
    } else if (entityName === "Libraries or Frameworks") {
      // Convert that string to array
      let temp = skills.librariesOrFrameworks.split(',');
      if (temp.length === 1) {
        let temp = { ...skills }
        delete temp.librariesOrFrameworks;
        await setSkills(temp)
      } else {
        // Splice the indexth term
        temp.splice(index, 1)
        // Convert array to string and set it to skills
        temp = temp.join(",")
        await setSkills({ ...skills, librariesOrFrameworks: temp })
      }
    } else if (entityName === "Tools or Platforms") {
      // Convert that string to array
      let temp = skills.toolsOrPlatforms.split(',');
      if (temp.length === 1) {
        let temp = { ...skills }
        delete temp.toolsOrPlatforms;
        await setSkills(temp)
      } else {
        // Splice the indexth term
        temp.splice(index, 1)
        // Convert array to string and set it to skills
        temp = temp.join(",")
        await setSkills({ ...skills, toolsOrPlatforms: temp })
      }
    } else if (entityName === "Databases") {
      // Convert that string to array
      let temp = skills.databases.split(',');
      if (temp.length === 1) {
        let temp = { ...skills }
        delete temp.databases;
        await setSkills(temp)
      } else {
        // Splice the indexth term
        temp.splice(index, 1)
        // Convert array to string and set it to skills
        temp = temp.join(",")
        await setSkills({ ...skills, databases: temp })
      }
    }
  }

  const nextDetails = async (e) => {
    e.preventDefault()
    await dispatch(storeInfoAction({ ...info.data }))
    // console.log(details)
    await dispatch(pdfAction({ ...info.data }))
    props.nextState()
  }

  const prevDetails = async (e) => {
    e.preventDefault()
    await dispatch(storeInfoAction({ ...info.data }))
    props.prevState()
  }

  return (
    <>
      <MyStepper active={4} />
      <form className='form-container'>
        <div className="educationDetails-info">
          Programming Languages
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Programming Languages" data={skills?.programmingLangs ? skills?.programmingLangs : ""} />
          Libraries or Frameworks
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Libraries or Frameworks" data={skills?.librariesOrFrameworks ? skills?.librariesOrFrameworks : ""} />
          Tools or Platforms
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Tools or Platforms" data={skills?.toolsOrPlatforms ? skills?.toolsOrPlatforms : ""} />
          Databases
          <Adder appendData={appendData} deleteData={deleteMe} entityName="Databases" data={skills?.databases ? skills?.databases : ""} />
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