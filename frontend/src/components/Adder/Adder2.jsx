import React, { useState, useEffect } from 'react'
import "./Adder.css"
import { useSelector } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

const Adder2 = (props) => {
    const info = useSelector(state => state.info)

    const [details, setdetails] = useState([])
    const [newValue, setnewValue] = useState("")


    useEffect(() => {
        let temp = []
        console.log(props?.data)
        for (let index = 0; index < props?.data?.length; index++) {
            const item = props?.data[index];
            console.log(item, "item")
            // item = {certificate: "dsd"}
            for (let index = 0; index < Object.values(item).length; index++) {
                const element = Object.values(item)[index];
                temp.push(element)
            }
        }
        setdetails(temp)
    }, [info])


    const addNewValue = () => {
        if (newValue !== "") {
            let temp = details
            temp.push(newValue)
            setnewValue("")
            setdetails(temp)
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
                            <p className='boxItem'>
                                <div>{item}</div>
                                <div onClick={() => deleteMe(index)}><CloseIcon sx={{ color: "red", width: "15px", height: "15px" }} /></div>
                            </p>)
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

export default Adder2



// achievementsAndOther = [{
//     certificates: ["", ""],
//     hobbies: [""],
//     extraCurricular: [""],
//     achievements: [""]
// }]