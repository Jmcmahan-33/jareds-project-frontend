

function TeacherCard({teacher}) {

    return (
        <div>
            <h4>{teacher.name}</h4>
            <p>{teacher.instrument}</p>
            <p>Available:{teacher.availability}</p>
            <p>{teacher.rate}</p>
        </div>

    )

}

export default TeacherCard