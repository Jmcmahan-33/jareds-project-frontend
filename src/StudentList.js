import StudentCard from "./StudentCard"

function StudentList({ students }) {
    const studentItems = students.map(student => {

        return (
            <StudentCard
                key={student.id}
                student={student}
            />
        )
    })

    return (
        <div>
            <h2>STUDENTS</h2>
            {studentItems}
        </div>
    )
}

export default StudentList