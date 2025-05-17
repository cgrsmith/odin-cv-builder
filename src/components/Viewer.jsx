
import PersonalView from "./PersonalView";
import ViewerSection from "./ViewerSection";
import "../styles/resumeView.css";

function Viewer(props) {
    return (
        <div className="viewer">
            <div className="viewPage">
                <PersonalView formData={props.formData} />
                {/* <EducationView formData={props.formData} />
                <ExpView expData={props.formData.experience} /> */}
                <ViewerSection title={"Education"} type={"edu"} data={props.formData.education} />
                <ViewerSection title={"Experience"} type={"exp"} data={props.formData.experience} />
            </div>
        </div>
    )
}

export default Viewer;