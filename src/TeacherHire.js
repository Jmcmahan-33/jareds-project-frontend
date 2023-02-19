import React, {useState} from "react"


// Teacher Post
    //create form
    // 

    const initialTeacher = {
        name: "",
        musical_talents: "",
        rate: "",
    }

    const teachersUrl= "http://localhost:9292/teachers"

    function TeacherHire({onAddTeacher}) {
        const [hire, setHire] = useState(initialTeacher)


        function handleChange(e) {
            setHire({
                ...hire,
                [e.target.name]: e.target.value
            })
        }

        function handleSubmit(e) {
            e.preventDefault()
            console.log("Teacher URL", teachersUrl)
            fetch(teachersUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(hire)
            })
                .then(response => response.json())
                .then(newTeacher => {
                    onAddTeacher(newTeacher)
                    setHire("")
                })
        }



        return(
            <div>
                <h2>Teacher Hire</h2>
                <form onSubmit={handleSubmit}>
                <input
                        type="text"
                        name="name"
                        value={hire.name}
                        onChange={handleChange}
                        placeholder="name"
                    />
                <input
                        type="text"
                        name="musical_talents"
                        value={hire.musical_talents}
                        onChange={handleChange}
                        placeholder="Talents"
                    />
                <input
                        type="text"
                        name="rate"
                        value={hire.rate}
                        onChange={handleChange}
                        placeholder="Rate"
                    />
                    <button type="submit">Submit Application</button>

                </form>
            </div>
        )
    }

    export default TeacherHire