import React, { useState } from "react"

const initialStudent = {
    name: "",
    instrument: "",
    teacher_id: "",
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
    const optionsList = teachers.map(teacher => <option value={teacher.id}>{teacher.name}</option>)
    return (
        <div>
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={signUp.name}
                        onChange={handleChange}
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="instrument"
                        value={signUp.instrument}
                        onChange={handleChange}
                        placeholder="instrument"
                    />
                </div>
                <div>
                    <select
                        name="teacher_id"
                        value={signUp.teacher_id}
                        onChange={handleChange}
                    >
                        <option value="All">Choose Teacher</option>
                        {optionsList}
                    </select>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default StudentSignUp