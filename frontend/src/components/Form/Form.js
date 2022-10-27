import React, {useState} from 'react'
import AchievementsForm from './AllForms/AchievementsForm'
import BasicDetailsForm from './AllForms/BasicDetailsForm'
import EducationalDetails from './AllForms/EducationalDetails'
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

    return (
        <>
        
        {currentState == 0 && <BasicDetailsForm prevState = {prevState} nextState = {nextState} />}
        {currentState == 1 && <EducationalDetails prevState = {prevState} nextState = {nextState} />}
        {currentState == 2 && <WorkExperience prevState = {prevState} nextState = {nextState} />}
        {currentState == 3 && <Projects prevState = {prevState} nextState = {nextState} />}
        {currentState == 4 && <Skills prevState = {prevState} nextState = {nextState} />}
        {currentState == 5 && <AchievementsForm prevState = {prevState} nextState = {nextState} />}
        </>
    )
}

export default Form