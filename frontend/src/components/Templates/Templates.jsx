import React from 'react'
import './Templates.css'
import { Link } from 'react-router-dom'
import normalImage from "./images/resume-template.png"
import professionalImage from "./images/resume-template.png"

const Templates = () => {
  return (
    <div className='template-card-container'>
      <TemplateItem image={normalImage} imageDesc="Normal" linkTo="normal" />
      <TemplateItem image={professionalImage} imageDesc="Professional" linkTo="professional" />
      <TemplateItem image={professionalImage} imageDesc="Creative" linkTo="creative" />
    </div>
  )
}

const TemplateItem = ({ image, imageDesc, linkTo }) => {
  return (
    <Link to={`/create-resume/${linkTo}`} className='template-card'>
      <div><img src={image} alt="image" /></div>
      <span>{imageDesc}</span>
    </Link>
  )
}

export default Templates;