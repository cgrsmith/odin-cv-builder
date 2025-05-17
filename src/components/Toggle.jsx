
function Toggle(props) {

    return (
        <div className="toggle"> 

            <input type="radio" name="view_type" value="Edit" id="edit" 
                checked = {props.activeView === "Edit"}
                onChange = {() => props.setActiveView("Edit")}
            ></input>
            <label htmlFor="edit">
                Edit
            </label>
            
            <input type="radio" name="view_type" value="View" id="view"
                checked = {props.activeView === "View"}
                onChange = {() => props.setActiveView("View")}
            ></input>
            <label htmlFor="view">
                View
            </label>

        </div>
    )
}

export default Toggle;