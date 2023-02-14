function StudentCard({student}){

    return (
        <div>
            <h4>{student.name}</h4>
            <p>{student.instrument}</p>
            <p>{student.teacher_id}</p>
        </div>
    )
}


export default StudentCard