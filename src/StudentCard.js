import EditStudent from "./EditStudent"
// import { useState } from "react";

function StudentCard({student, onUpdateStudent}){
    // const [isEditing, setIsEditing] = useState(false);
    // should update live in Student card or EditStudent.
    // const {} = student

//     function handleUpdateStudent(updatedStudent) {
//     setIsEditing(false);
//     onUpdateStudent(updatedStudent);
//   }

  
    return (
        <div>
            <h4>{student.name}</h4>
            <p>instrument choice: {student.instrument}</p>
            <p>{student.teacher_id}</p>
            <EditStudent  student={student}/>
            <button>Change</button>
        </div>
    )
}


export default StudentCard