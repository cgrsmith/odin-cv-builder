import React from 'react'
import ExpItemEdit from './ExpItemEdit';

const ExpEdit = (props) => {

    function createExpItem() {
        props.setExpData([
            ...props.expData,
            {
                id : crypto.randomUUID(),
                organisation : "",
                location : "",
                role : "",
                startYear : "",
                endYear : "",
                responsibilities : ""
            }
        ])
    }

    function setExpItem(expItemId, newItem) {
        props.setExpData(props.expData.map(item => {
            if (item.id === expItemId) {
                return newItem;
            } else {
                return item;
            }
        }))
    }

    function deleteExpItem(expItemId) {
        props.setExpData(props.expData.filter(item => item.id !== expItemId));
    }

    return (
        <div>
            <div className="sectionHeader">
                <h2>Experience</h2>
                <button onClick={createExpItem}>
                    +
                </button>
            </div>
            {props.expData.map(expItem => {
                return <ExpItemEdit key={expItem.id} item={expItem} setItem={setExpItem} deleteItem={deleteExpItem}/>
            })}
        </div>
    )
}

export default ExpEdit
