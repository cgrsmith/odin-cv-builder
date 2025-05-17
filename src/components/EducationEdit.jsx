import React from 'react'
import EduItemEdit from './EduItemEdit'

const EducationEdit = (props) => {

    function deleteEduItem(eduItemId) {
        props.setFormData({
            ...props.formData,
            education : props.formData.education.filter(item => item.id !== eduItemId)
        })
    }

    function setEduItem(eduItemId, newData) {
        props.setFormData({
            ...props.formData,
            education : props.formData.education.map(item => {
                if (item.id === eduItemId) {
                    return newData;
                } else {
                    return item;
                }
            })
        })
    }

    function createEduItem() {
        props.setFormData({
            ...props.formData,
            education : [
                ...props.formData.education,
                {
                    id : crypto.randomUUID(),
                    location : "",
                    qualification : "",
                    year : "",
                }
            ]

        })
    }

    return (
        <div>
            <div className="sectionHeader">
                <h2>Education</h2>
                <button onClick={createEduItem}>
                    +
                </button>
            </div>
            {props.formData.education.map((eduItem) => (
                <EduItemEdit key={eduItem.id} item={eduItem} setItem={setEduItem} deleteItem={deleteEduItem} />
            ))}
        </div>
    )
}

export default EducationEdit
