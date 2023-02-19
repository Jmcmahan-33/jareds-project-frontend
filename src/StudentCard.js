
// import { useState } from "react";

function StudentCard({student, onSelectedStudent, onDeleteStudent}){
    

    function handleClick() {
        console.log("student",student)
        onSelectedStudent(student)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/teachers/${student.id}`, {
            method: "DELETE",
        });
        onDeleteStudent(student.id)
    }

  
    return (
        <div>
            <h4>{student.name}</h4>
            <p>instrument choice: {student.instrument}</p>
            <p>{student.teacher_id}</p>
            <button onClick={handleClick}>Edit Student</button>
            <button onClick={handleDeleteClick}>Delete Student</button>
        </div>
    )
}


export default StudentCard