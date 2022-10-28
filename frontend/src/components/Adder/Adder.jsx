import React, { useState, useEffect } from 'react'
import "./Adder.css"
import { useSelector } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

const Adder = (props) => {
    const info = useSelector(state => state.info)

    const [details, setdetails] = useState([])
    const [newValue, setnewValue] = useState("")

    console.log(props.data)

    useEffect(() => {
        if (props.data === "") {
            setdetails([])
        } else {
            // var array = props.data.split(',');
            setdetails(props.data)
        }
    }, [info])


    const addNewValue = () => {
        if (newValue !== "") {
            let temp = []
            for (let i = 0; i < details.length; i++) {
                temp.push(details[i]);
            }
            temp.push(newValue)
            setnewValue("")
            setdetails(temp)
            console.log(temp)
            // Send this array to parent
            props.appendData(temp, props.entityName)
        }
    }

    const deleteMe = (index) => {
        props.deleteData(index, props.entityName)
    }

    return (
        <>
            <div className="adderContainer">
                <div className="box">
                    {details.map((item, index) => {
                        return (
                            <div className='boxItem'>
                                <div>{item}</div>
                                <div onClick={()=>deleteMe(index)}><CloseIcon sx={{ color: "red", width: "15px", height: "15px" }} /></div>
                            </div>)
                    })
                    }
                    <input placeholder='Enter to proceed' value={newValue} onChange={(e) => { setnewValue(e.target.value) }} />
                </div>
                <div className='adderBtn' onClick={addNewValue}>
                    <AddCircleIcon />
                </div>
            </div>
        </>
    )
}

export default Adder