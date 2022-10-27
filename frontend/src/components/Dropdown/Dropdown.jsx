import React, { useState } from 'react'
import './dropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';

const Dropdown = (props) => {

    const [dropdown, setDropdown] = useState(false)

    // const { CompanyName,
    //     designation,
    //     location,
    //     Techstacks,
    //     duration } = props.data

    const { upper, lower } = props.data

    const deleteMe = () => {
        let text = "Are you sure you want to delete ?!\nEither OK or Cancel.";
        // Edit this later
        if (window.confirm(text) == true) {
            console.log(props.index)
            props.deleteData(props.index)
        } else {
            text = "You canceled!";
        }
    }

    return (
        <>
            <div className="dropdown">
                <div className="upperBox">
                    <div className="dataBox">
                        {upper.map((item) => {
                            return (<div >
                                <p>{item.displayFormat} : {item.displayData}</p>
                            </div>)

                        })}
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={() => { setDropdown(!dropdown) }}>
                        {dropdown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    <div style={{ margin: "0px 5px" }}>
                        <div onClick={deleteMe}><CloseIcon sx={{ color: "red" }} /></div>
                    </div>
                </div>
                <div className={dropdown ? "lowerBox lowerBoxOpen" : "lowerBox lowerBoxClose"}>
                    {lower.map((item) => {
                        return (<div >
                            <p>{item.displayFormat} : {item.displayData}</p>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Dropdown