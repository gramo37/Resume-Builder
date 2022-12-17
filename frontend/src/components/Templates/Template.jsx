import React, { useEffect } from 'react'
import './Templates.css';
import { useDispatch, useSelector } from "react-redux"
import { pdfAction } from '../../redux/actions/pdfAction';
import { jsPDF } from "jspdf";
import NormalTemplate from '../ResumeTemplates/NormalTemplate/NormalTemplate';
import Form from '../Form/Form';
import { useParams } from 'react-router-dom';
import ProfessionalTemplate from '../ResumeTemplates/ProfessionalTemplate/ProfessionalTemplate';
import CreativeTemplate from '../ResumeTemplates/CreativeTemplate/CreativeTemplate';

const Template = () => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.info)
  const pdf = useSelector(state => state.pdf)
  let { resumeType } = useParams();

  const generatePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    // doc.html()
    // doc.textWithLink('Click here', 10, 10, { url: 'http://www.google.com' });
    doc.html(document.querySelector("#resume-template"), {
      callback: function (pdf) {
        pdf.save(`${info?.data?.name}.pdf`);
      }
    })
  }

  const generateWord = () => {
    let doc = new jsPDF("p", "pt", "a4");
    // doc.html()
    // doc.textWithLink('Click here', 10, 10, { url: 'http://www.google.com' });
    doc.html(document.querySelector("#resume-template"), {
      callback: function (pdf) {
        pdf.save(`${info?.data?.name}.docx`);
      }
    })
  }

  useEffect(async () => {
    console.log(info.data)
    await dispatch(pdfAction(info.data))
  }, [])

  return (
    <div className='main-container'>
      <h2>Please scroll Below to fill the Details</h2>
      <div className='sub-main-container'>
        <div className='main-form-container'> <Form generatePDF={generatePDF} generateWord={generateWord} /> </div>
        <div className="pdf-container">
          <div className='template-holder' id="resume-template">
            {resumeType === "normal" && <NormalTemplate data={info} />}
            {resumeType === "professional" && <ProfessionalTemplate data={info} />}
            {resumeType === "creative" && <CreativeTemplate data={info} />}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Template