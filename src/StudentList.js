import StudentCard from "./StudentCard"

function StudentList({ students, onSelectedStudent}) {
    const studentItems = students.map(student => {

        return (
            <StudentCard
                key={student.id}
                student={student}
                onSelectedStudent={onSelectedStudent}
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