import React from 'react'
import EduItemView from './EduItemView'
import ExpItemView from './ExpItemView'

const ViewerSection = (props) => {
  return (
    <div className="viewerSection">
        <div className="viewHeader">
            <h3>{props.title}</h3>
            <hr></hr>
        </div>
        {props.data.map((item) => {
            if (props.type === "edu") {
                return <EduItemView key={item.id} item={item}/>
            } else if (props.type === "exp") {
                return <ExpItemView key={item.id} item={item}/>
            }
        })}
    </div>
  )
}

export default ViewerSection
