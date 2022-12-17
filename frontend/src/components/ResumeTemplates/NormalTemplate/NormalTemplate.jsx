import React from 'react'
import "./NormalTemplate.css"

const NormalTemplate = (props) => {
    const { data } = props.data;

    return (
        <>
            
                <h3 className="name">{data?.name}</h3>
                <h4 className="personal-details">
                    {data?.email} | {data?.mobile} | {data?.address} | {data?.github} | {data?.linkedin} | <a href={data?.personalWebsite}>Personal Website</a> | {data?.twitter}
                </h4>
                
                <h5 className="heading-1">Education</h5>
                <hr style={{ margin: "0px" }} />
                <div className="educational-details">
                    {data?.educationalDetail?.map((item) => {
                        return (<div>
                            <div className="name-date-box">
                                <h5 className="sub-heading-1">
                                    {item.collegename}
                                </h5>
                                <h5 className="sub-heading-1">{item.duration}</h5>
                            </div>
                            <ul>
                                <li>
                                    <p className="text">
                                        {item.degree} | CGPA: <strong>{item.grade}/10</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>)
                    })}

                </div>

                <h5 className="heading-1">Skills</h5>
                <hr style={{ margin: "0px" }} />
                <div>
                    <div className="skills-box">
                        <h5 className="sub-heading-1">Proficient:</h5>
                        <p className="text">{data?.skills?.proficient?.map((item) => {
                            return (item + " | ")
                        })}</p>
                    </div>
                    <div className="skills-box">
                        <h5 className="sub-heading-1">Familiar:</h5>
                        <p className="text">{data?.skills?.familiar?.map((item) => {
                            return (item + " | ")
                        })}</p>
                    </div>
                </div>

                <h5 className="heading-1">Work Experience</h5>
                <hr style={{ margin: "0px" }} />
                <div>
                    {data?.workExperience?.map((item) => {
                        return (<>
                            <div className="name-date-box">
                                <div className="skills-box">
                                    <h5 className="sub-heading-1">{item.CompanyName} |</h5>
                                    <p className="text">{item.designation}</p>
                                </div>
                                <h5 className="sub-heading-1">{item.duration}</h5>
                            </div>
                            <ul>
                                {item?.description?.map((desc) => {
                                    return (<li>
                                        <p className="text">
                                            {desc}
                                        </p>
                                    </li>)
                                })}
                            </ul>
                        </>)
                    })}

                </div>
                <h5 className="heading-1">Projects</h5>
                <hr style={{ margin: "0px" }} />
                <div>
                    {data?.projects?.map((item) => {
                        return (<>
                            <div>
                                <div className="name-date-box">
                                    <h5 className="sub-heading-1">{item.projectName}</h5>
                                    <h5 className="sub-heading-1">{item.duration}</h5>
                                </div>
                                <h5 className="sub-heading-2">
                                    {item.mainTitle}
                                </h5>
                                <ul style={{ marginTop: "4px" }}>
                                    {item?.description?.map((desc)=>{
                                        return(<li>
                                            <p className="text">
                                                {desc}
                                            </p>
                                        </li>)
                                    })}
                                </ul>
                            </div>
                        </>)
                    })}
                </div>
                <h5 className="heading-1">Academic and Extracurricular Achievements</h5>
                <hr style={{ margin: "0px" }} />
                <div>
                    <ul style={{ marginTop: "4px" }}>
                        {data?.extracurriculars?.map((item)=>{
                            return (<li>
                                <p className="text">
                                    {item}
                                </p>
                            </li>)
                        })}
                    </ul>
                </div>
        </>
    )
}

export default NormalTemplate