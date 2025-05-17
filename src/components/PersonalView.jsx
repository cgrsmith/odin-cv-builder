import React from 'react'

const PersonalView = (props) => {
  return (
    <div className="personalInfo">
        <p className="personalName">{props.formData.name}</p>
        <span className="personalDetail"> {props.formData.location} </span>
        |
        <span className="personalDetail"> {props.formData.phone} </span>
        |
        <span className="personalDetail"> {props.formData.email} </span>
        <div className="viewHeader">
            <h3>Personal Objective</h3>
            <hr></hr>
        </div>
        <p className="personalObjective">{props.formData.objective}</p>
    </div>
  )
}

export default PersonalView
