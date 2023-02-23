
// import { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";


function StudentCard({student, onSelectedStudent, onDeleteStudent}) {


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
                <h4 className='student-name'>{student.name}</h4>
                <p>Instrument Choice: {student.instrument}</p>
                <p>Assigned Teacher:{student.teacher.name}</p>
                <button onClick={handleClick}>Edit Student</button>
                <button onClick={handleDeleteClick}>Delete Student</button>
            </Paper>
        </Grid>

    )
}


export default StudentCard