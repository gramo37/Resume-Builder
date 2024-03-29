import React, { Suspense } from 'react'
import "./app.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

const DashBoard = React.lazy(() => import("./components/DashBoard/DashBoard"));
const Template = React.lazy(() => import("./components/Templates/Template"));
const Error404 = React.lazy(() => import("./components/404/Error404"));
const Templates = React.lazy(() => import("./components/Templates/Templates"));

export const App = () => {

  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading ..</h1>}>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/templates" element={<Templates />} />
            <Route exact path="/template" element={<Template />} />
            {/* <Route exact path="/create-resume/:resumeType" element={<PdfContainer />} /> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </Router>
    </>

  )
}

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

export default App
