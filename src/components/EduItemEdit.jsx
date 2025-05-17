import React from 'react'

const EduItemEdit = (props) => {
  return (
    <div className="edit editCard">
        <form>
            <label htmlFor="eduLocation">
                <span>Education Institution: </span>
                <input
                    id="eduLocation"
                    type="text"
                    value={props.item.location}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, location : e.target.value})}
                />
            </label>
            <label htmlFor="eduType">
                <span>Type of Qualification:</span> 
                <input
                    id="eduType"
                    type="text"
                    value={props.item.qualification}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, qualification : e.target.value})}
                />
            </label>
            <label htmlFor="eduYear">
                <span>Year Attained: </span>
                <input
                    id="eduYear"
                    type="text"
                    value={props.item.year}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, year : e.target.value})}
                />
            </label>
        </form>
        <button onClick={() => props.deleteItem(props.item.id)}>
            Delete
        </button>
    </div>
  )
}

export default EduItemEdit
