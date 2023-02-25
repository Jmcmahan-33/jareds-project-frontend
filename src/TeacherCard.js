import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
// import React, {useState} from 'react';
// import TeachersStudents from './TeacherStudents';

function TeacherCard({ teacher }) {
    // const [teachersStudents, setTeachersStudents] = useState("")

    // function handleClick() {
    //     console.log(teacher.students)
        

    // }

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <div className='teacher-info'>
                    <h4 className='teacher-name'>{teacher.name}</h4>
                    <p>Instruments: {teacher.musical_talents}</p>
                    <p>Rate: ${teacher.rate}</p>
                    {/* <button onClick={handleClick}>students</button> */}
                </div>
            </Paper>
        </Grid>


    )

}

export default TeacherCard