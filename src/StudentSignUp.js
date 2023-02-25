import React, { useState } from "react"

const initialStudent = {
    name: "",
    instrument: "",
    teacher_id: 1,
}

const studentsUrl = "http://localhost:9292/students"

function StudentSignUp({ teachers, onAddStudents }) {
    
    const [signUp, setSignUp] = useState(initialStudent)
    
    function handleChange(e) {
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(studentsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUp)
        })
            .then(response => response.json())
            .then(newStudent => {
                console.log("New Student", newStudent)
                onAddStudents(newStudent)
                setSignUp("")
            })
    }
    const optionsList = teachers.map(teacher =>
            <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
    )
    console.log(signUp)
    return (
        <div className="form">
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                <input
                        type="text"
                        name="name"
                        value={signUp.name}
                        onChange={handleChange}
                        placeholder="name"
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="instrument"
                        value={signUp.instrument}
                        onChange={handleChange}
                        placeholder="instrument"
                    />
                </div>
                <div className="input">
                    <label className="teacher-label">Find Teacher:</label>
                    <br/>
                    <select
                        name="teacher_id"
                        value={signUp.teacher_id}
                        onChange={handleChange}
                    >
                       {optionsList}
                    </select>
                </div>
                    <button className="submit" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default StudentSignUp