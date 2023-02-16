import TeacherCard from "./TeacherCard"
function TeacherList({ teachers }) {

    //commit test
    const teacherItem = teachers.map(teacher => {
        return (
            <TeacherCard
                key={teacher.id}
                teacher={teacher}
            />
        )
    })

    return (
        <div>
            <h2>TEACHERS</h2>
            {teacherItem}
        </div>
    )
}

export default TeacherList