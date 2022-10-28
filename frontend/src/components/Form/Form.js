import React, {useState} from 'react'
import AchievementsForm from './AllForms/AchievementsForm'
import BasicDetailsForm from './AllForms/BasicDetailsForm'
import EducationalDetails from './AllForms/EducationalDetails'
import Extracurricular from './AllForms/Extracurricular'
import PersonalLinksForm from './AllForms/PersonalLinksForm'
import Projects from './AllForms/Projects'
import Skills from './AllForms/Skills'
import WorkExperience from './AllForms/WorkExperience'

const Form = (props) => {

    const [currentState, setCurrentState] = useState(0)
    const prevState = () => {
        setCurrentState(currentState-1)
    }

    const nextState = () => {
        setCurrentState(currentState+1)
    }

    const changeState = (state) => {
        setCurrentState(state);
    }

    return (
        <>
        
        {currentState == 0 && <BasicDetailsForm prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {currentState == 1 && <PersonalLinksForm prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {currentState == 2 && <EducationalDetails prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {currentState == 3 && <WorkExperience prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {currentState == 4 && <Projects prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {currentState == 5 && <Skills prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        {/* {currentState == 6 && <AchievementsForm prevState = {prevState} nextState = {nextState} changeState={changeState} />} */}
        {currentState == 6 && <Extracurricular prevState = {prevState} nextState = {nextState} changeState={changeState} />}
        </>
    )
}

export default Form