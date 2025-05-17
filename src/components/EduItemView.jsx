import React from 'react'

const EduItemView = (props) => {
  return (
    <div className="viewSection">
        <div className="viewSectionDivider">
            <div className="viewSectionLeft">
                <p className="title">{props.item.location}</p>
                <p className="subtitle">{props.item.qualification}</p>
            </div>
            <div className="viewSectionRight">
                <p>{props.item.year}</p>
            </div>
        </div>
    </div>
  )
}

export default EduItemView
