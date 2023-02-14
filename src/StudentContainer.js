import StudentCard from "./StudentCard"

function StudentContainer({ students }) {
    const studentItems = students.map(student => {

        return (
           <StudentCard/>
        )
    })

    return (
        <div>

            <h2>STUDENTS</h2>
            {studentItems}


        </div>

    )
}

export default StudentContainer