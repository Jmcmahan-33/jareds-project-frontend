
// import { useState } from "react";

function StudentCard({student, onSelectedStudent}){
    

    function handleClick() {
        console.log("student",student)
        onSelectedStudent(student)
    }
  
    return (
        <div>
            <h4>{student.name}</h4>
            <p>instrument choice: {student.instrument}</p>
            <p>{student.teacher_id}</p>
            <button onClick={handleClick}>Edit Student</button>
        </div>
    )
}


export default StudentCard