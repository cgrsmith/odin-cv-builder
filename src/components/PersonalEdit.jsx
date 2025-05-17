
function PersonalEdit(props) {
    return(
        <div>
            <h2>Personal Information</h2>
            <div className="edit editCard">
                <form>
                    <label htmlFor="personalName">
                        <span>Name: </span>
                        <input
                            id="personalName"
                            type="text"
                            value={props.formData.name}
                            onChange={(e) => props.setFormData({...props.formData, name: e.target.value})}
                        />
                    </label>
                    <label htmlFor="personalLocation">
                        <span>Location: </span>
                        <input
                            id="personalLocation"
                            type="text"
                            value={props.formData.location}
                            onChange={(e) => props.setFormData({...props.formData, location: e.target.value})}
                        />
                    </label>
                    <label htmlFor="personalEmail">
                        <span>Email: </span>
                        <input
                            id="personalEmail"
                            type="text"
                            value={props.formData.email}
                            onChange={(e) => props.setFormData({...props.formData, email: e.target.value})}
                        />
                    </label>
                    <label htmlFor="personalPhone">
                        <span>Phone Number:</span>
                        <input
                            id="personalPhone"
                            type="text"
                            value={props.formData.phone}
                            onChange={(e) => props.setFormData({...props.formData, phone: e.target.value})}
                        />
                    </label>
                    <label htmlFor="personalObjective">
                        <span>Personal Objective:</span>
                        <textarea
                            id="personalObjective"
                            type="text"
                            value={props.formData.objective}
                            onChange={(e) => props.setFormData({...props.formData, objective: e.target.value})}
                        />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default PersonalEdit;