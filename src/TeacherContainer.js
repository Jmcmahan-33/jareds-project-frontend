function TeacherContainer({teachers}) {

//commit test
    const teacherItem = teachers.map(teacher => {
        return (
            <div></div>
        )
    })

    return(
        <div>
            {teacherItem}

        </div>
    )
}

export default TeacherContainer