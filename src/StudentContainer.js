function StudentContainer({students}) {
    const studentItems = students.map(student => {

        return (
            <div></div>
        )
    })

    return(
        <div>

                <h1>Hello from Student Container</h1>
                <h2>{studentItems}</h2>

    
        </div>

    )
}

export default StudentContainer