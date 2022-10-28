import React, { useState, useEffect } from 'react'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

import './PdfContainer.css'
import Form from '../Form/Form';
import { useDispatch, useSelector } from "react-redux"
import { pdfAction } from '../../redux/actions/pdfAction';

const PdfContainer = () => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)
    const pdf = useSelector(state => state.pdf)


    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // for submit event
    const [viewPdf, setViewPdf] = useState(null);
    const [message, setMessage] = useState("")

    // onchange event
    const fileType = ['application/pdf'];

    useEffect(async () => {
        console.log(info.data)

        await dispatch(pdfAction(info.data))
    }, [])


    // Continue from here tomorrow
    useEffect(async () => {
        // API request for getting base64 pdf
        console.log(pdf)
        if (pdf?.data?.data === undefined) {
            setMessage("Loading...")
            setViewPdf(null)
        } else {
            let data = 'data:application/pdf;base64,' + pdf?.data?.data
            setViewPdf(data);
        }
        if (info.data === null) {
            setMessage("Please fill the details to see the preview")
        }
    }, [info, pdf])

    return (
        <div className='main-container'>
            <div className='main-form-container'>
                <Form />
            </div>
            <div className='pdf-container'>
                {/* show pdf conditionally (if we have one)  */}
                {viewPdf && <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={viewPdf}
                        plugins={[defaultLayoutPluginInstance]} />
                </Worker></>}

                {/* if we dont have pdf or viewPdf state is null */}
                {!viewPdf && <>{message}</>}
            </div>
            <div className='showInTabOnly'>
                <h2>Please scroll Below to fill the Details</h2>
            </div>

        </div>
    )
}

export default PdfContainer