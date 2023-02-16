import React, { useState } from "react"

const initialStudent = {
    name: "",
    instrument: "",
}

const studentsUrl = "http://localhost:9292/students"

function StudentSignUp({ onAddStudents }) {
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
                onAddStudents(newStudent)
                setSignUp("")
            })
    }

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
                            name="type"
                            value={signUp.type}
                            onChange={handleChange}
                        >
                            <option value="John">John Bog</option>
                            <option value="Mike">Mike Snow</option>
                            <option value="Chelsea">Chelsea Kyle</option>
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