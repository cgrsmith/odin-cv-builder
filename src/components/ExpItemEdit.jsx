import React from 'react'

// {
//     id : crypto.randomUUID(),
//     organisation : "test",
//     location : "",
//     role : "",
//     startYear : "",
//     endYear : "",
//     responsibilities : ""
// }

const ExpItemEdit = (props) => {
  return (
    <div className="edit editCard">
        <form>
            <label >
                <span>Organisation: </span>
                <input
                    id="expOrg"
                    type="text"
                    value={props.item.organisation}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, organisation : e.target.value})}
                />
            </label>
            <label htmlFor="expLocation">
                <span>Location:</span> 
                <input
                    id="expLocation"
                    type="text"
                    value={props.item.location}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, location : e.target.value})}
                />
            </label>
            <label htmlFor="expRole">
                <span>Role:</span> 
                <input
                    id="expRole"
                    type="text"
                    value={props.item.role}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, role : e.target.value})}
                />
            </label>
            <label htmlFor="expStart">
                <span>Start Date:</span> 
                <input
                    id="expStart"
                    type="text"
                    value={props.item.startYear}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, startYear : e.target.value})}
                />
            </label>
            <label htmlFor="expEnd">
                <span>End Date:</span>
                <input
                    id="expEnd"
                    type="text"
                    value={props.item.endYear}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, endYear : e.target.value})}
                />
            </label>
            <label htmlFor="expResp">
                <span>Responsibilities:</span> 
                <textarea
                    id="expResp"
                    type="text"
                    value={props.item.responsibilities}
                    onChange={(e) => props.setItem(props.item.id, {...props.item, responsibilities : e.target.value})}
                />
            </label>
        </form>
        <button onClick={() => props.deleteItem(props.item.id)}>
            Delete
        </button>
    </div>
  )
}

export default ExpItemEdit
