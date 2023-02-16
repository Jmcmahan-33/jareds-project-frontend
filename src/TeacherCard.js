

function TeacherCard({teacher}) {

    return (
        <div>
            <h4>{teacher.name}</h4>
            <p>instruments: {teacher.instrument}</p>
            <p>Available:{teacher.availability}</p>
            <p>rate: ${teacher.rate}</p>
        </div>

    )

}

export default TeacherCard