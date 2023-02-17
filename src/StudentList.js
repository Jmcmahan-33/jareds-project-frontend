import StudentCard from "./StudentCard"

function StudentList({ students, onUpdateStudent}) {
    const studentItems = students.map(student => {

        return (
            <StudentCard
                key={student.id}
                student={student}
                onUpdateStudent={onUpdateStudent}
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