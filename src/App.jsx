import { useEffect, useState } from 'react'

import './styles/App.css'
import Toggle from './components/Toggle';
import Editor from './components/Editor';
import Viewer from './components/Viewer';

function App() {
    const [activeView, setActiveView] = useState("Edit");
    const [formData, setFormData] = useState(
        JSON.parse(localStorage.getItem("cvBuilderFormData")) ||
        {
        name : "",
        location : "",
        email : "",
        phone : "",
        objective : "",
        education : [                
            {
                id : crypto.randomUUID(),
                location : "",
                qualification : "",
                year : "",
            }],
        experience : [
            {
                id : crypto.randomUUID(),
                organisation : "",
                location : "",
                role : "",
                startYear : "",
                endYear : "",
                responsibilities : ""
            }],
    });

    useEffect(() => {
        localStorage.setItem("cvBuilderFormData", JSON.stringify(formData));
    }, [formData]);


  return (
    <>
        <header >
            <h1>Resume Builder</h1>
        </header>
        <div className="stickyHeader">
            <Toggle activeView = {activeView} setActiveView = {setActiveView} />
        </div>
        {activeView === "Edit" ? 
        <Editor formData = {formData} setFormData = {setFormData}/> 
            : 
        <Viewer formData = {formData}/>
        }
    </>
  )
}

export default App
