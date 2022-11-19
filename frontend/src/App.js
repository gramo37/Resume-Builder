import React from 'react'
import PdfContainer from './components/PDFContainer/PdfContainer';
import Error404 from "./components/404/Error404"
import "./app.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import DashBoard from './components/DashBoard/DashBoard';

export const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard />} />
          <Route exact path="/create-resume" element={<PdfContainer />} />
          <Route path="*" element={<Error404 />} />
          </Routes>
      </Router>
    </>
    
  )
}

export default App
