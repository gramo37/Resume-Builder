import React, { useState, useEffect } from 'react'
import Stepper from '../../Stepper/MyStepper';
import { useDispatch, useSelector } from "react-redux"
import '../Form.css'
import { storeInfoAction } from '../../../redux/actions/storeInfoAction';
import { pdfAction } from '../../../redux/actions/pdfAction';
import Adder2 from '../../Adder/Adder2';

const AchievementsForm = (props) => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)

    const [certificates, setcertificates] = useState(info?.data?.certificates ? info?.data?.certificates : [])
    const [hobbies, sethobbies] = useState(info?.data?.hobbies ? info?.data?.hobbies : [])
    const [extraCurricular, setextraCurricular] = useState(info?.data?.extraCurricular ? info?.data?.extraCurricular : [])
    const [achievements, setachievements] = useState(info?.data?.achievements ? info?.data?.achievements : [])

    const nextDetails = async (e) => {
        e.preventDefault()
        // await dispatch(storeInfoAction(details))
        props.nextState()
        // await dispatch(pdfAction(info.data))
        // Submit info.data to server
    }

    useEffect(async () => {
        console.log(certificates)
        // store the info in localStorage
        await dispatch(storeInfoAction({ ...info.data, certificates, hobbies, extraCurricular, achievements }))
        await dispatch(pdfAction({ ...info.data, certificates, hobbies, extraCurricular, achievements }))
    }, [certificates, hobbies, extraCurricular, achievements])


    const appendData = async (data, entityName) => {
        // data is an array
        console.log(data, entityName)
        if (entityName === "Certificates") {
            let temp2 = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                let temp = {}
                temp.certificate = element
                temp2.push(temp)
            }
            setcertificates(temp2)
        } else if (entityName === "Hobbies") {
            let temp2 = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                let temp = {}
                temp.hobby = element
                temp2.push(temp)
            }
            sethobbies(temp2)
        } else if (entityName === "Achievements") {
            let temp2 = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                let temp = {}
                temp.achievement = element
                temp2.push(temp)
            }
            setachievements(temp2)
        } else if (entityName === "Extra Curricular") {
            let temp2 = []
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                let temp = {}
                temp.activity = element
                temp2.push(temp)
            }
            setextraCurricular(temp2)
        }
    }

    const deleteMe = (index, entityName) => {
        console.log(index, entityName)
        if (entityName === "Certificates") {
            deleteHelper(certificates, setcertificates, index)
        } else if (entityName === "Hobbies") {
            deleteHelper(hobbies, sethobbies, index)
        } else if (entityName === "Achievements") {
            deleteHelper(achievements, setachievements, index)
        } else if (entityName === "Extra Curricular") {
            deleteHelper(extraCurricular, setextraCurricular, index)
        }
    }

    const deleteHelper = (state, setState, index) => {
        let temp = [...state]
        temp.splice(index, 1)
        setState(temp)
    }

    const prevDetails = () => {
        props.prevState()
    }

    return (
        <>
            <Stepper active={5} />
            <form className='form-container'>
                <div className="skills-info">
                    {/* Send Data to Preload stuff present in local storage*/}
                    Certificates
                    <Adder2 appendData={appendData} deleteData={deleteMe} entityName="Certificates" data={certificates} />
                    Hobbies
                    <Adder2 appendData={appendData} deleteData={deleteMe} entityName="Hobbies" data={hobbies} />
                    Achievements
                    <Adder2 appendData={appendData} deleteData={deleteMe} entityName="Achievements" data={achievements} />
                    Extra Curricular
                    <Adder2 appendData={appendData} deleteData={deleteMe} entityName="Extra Curricular" data={extraCurricular} />
                    {/* <Adder appendData={appendData} entityName="Certificates" data={skills?.databases ? skills?.databases : ""} /> */}
                </div>
                <div className='buttons-controller'>
                    <button onClick={prevDetails}>PREV</button>
                    <button onClick={nextDetails}>SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default AchievementsForm