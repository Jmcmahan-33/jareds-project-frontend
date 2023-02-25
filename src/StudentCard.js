
// import { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";


function StudentCard({ student, onSelectedStudent, onDeleteStudent }) {
    const {name, instrument} = student 
    const teacherName = student.teacher.name

    //map a <p> tage n number of times 

    function handleClick() {
        console.log("student", student)
        onSelectedStudent(student)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:9292/students/${student.id}`, {
            method: "DELETE",
        });
        onDeleteStudent(student.id)
    }

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <div className='student-info'>
                    <h4 className='student-name'>{name}</h4>
                    <p>find Avatar</p>
                    <p>Instrument Choice: {instrument}</p>
                    <p>Assigned Teacher: {teacherName}</p>
                    {/* {teacherName? <p>Assigned Teacher: {student.teacher.name}</p>:null } */}
                    <button onClick={handleClick}>Edit Student</button>
                    <button onClick={handleDeleteClick}>Delete Student</button>
                </div>
            </Paper>
        </Grid>

    )
}


export default StudentCard