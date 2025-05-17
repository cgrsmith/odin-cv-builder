import EducationEdit from "./EducationEdit";
import ExpEdit from "./ExpEdit";
import PersonalEdit from "./PersonalEdit";

function Editor(props) {
    function setExperience(newExperience) {
        props.setFormData({
            ...props.formData,
            experience : newExperience
        })
    }
    return (
        <div className="editor">
            <PersonalEdit formData = {props.formData} setFormData = {props.setFormData}/>
            <EducationEdit formData = {props.formData} setFormData = {props.setFormData}/>
            <ExpEdit expData = {props.formData.experience} setExpData = {setExperience}/>
        </div>
    )
}

export default Editor;