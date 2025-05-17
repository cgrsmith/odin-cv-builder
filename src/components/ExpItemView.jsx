import React from 'react'

const ExpItemView = (props) => {
  return (
    <div className="viewSection">
        <div className="viewSectionDivider">
            <div className="viewSectionLeft">
                <p className="title">{props.item.organisation}</p>
                <p className="subtitle">{props.item.role}</p>
            </div>
            <div className="viewSectionRight">
                <p>{props.item.location}</p>
                <p>{props.item.startYear} - {props.item.endYear}</p>
            </div>
        </div>
        <p>{props.item.responsibilities}</p>
    </div>
  )
}

export default ExpItemView
