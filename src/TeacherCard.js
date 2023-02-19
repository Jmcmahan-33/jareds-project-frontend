

function TeacherCard({teacher}) {
    
    return (
        <div>
            <h4>{teacher.name}</h4>
            <p>Instruments: {teacher.musical_talents}</p>
            <p>Available:{teacher.availability}</p>
            <p>Rate: ${teacher.rate}</p>
        </div>

    )

}

export default TeacherCard