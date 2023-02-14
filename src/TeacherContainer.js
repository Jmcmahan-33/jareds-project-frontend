import TeacherCard from "./TeacherCard"
function TeacherContainer({teachers}) {

//commit test
    const teacherItem = teachers.map(teacher => {
        return (
            <TeacherCard
            key={teacher.id}
            teacher={teacher}
            />
        )
    })

    return(
        <div>
            {teacherItem}

        </div>
    )
}

export default TeacherContainer