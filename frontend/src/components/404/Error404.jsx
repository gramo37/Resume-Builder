import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from "./error.png"

const styles = {
    height: "100vh",
    width: "75vw",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "10px"
}


const buttonStyle = {
    backgroundColor: "#7272e6",
    padding: "10px 15px",
    borderRadius: "5px",
    color: "white",
    border: "none",
    outline: "none",
    cursor: "pointer"
}

const Error404 = () => {
    return (
        <div style={styles}>
            <img style={{ width: "250px", height: "250px" }} src={errorImg} alt="404 error" />
            <h1 style={{fontSize: "1.75rem"}}>Sorry!! Something went wrong</h1>
            <p style={{fontSize: "1rem", fontStyle: "italic"}}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to="/">
                <button style={buttonStyle}>GO TO HOMEPAGE</button></Link>
        </div>
    )
}

export default Error404