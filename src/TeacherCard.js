import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";

function TeacherCard({ teacher }) {
 
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <div className='teacher-info'>
                    <h4 className='teacher-name'>{teacher.name}</h4>
                    <p>Instruments: {teacher.musical_talents}</p>
                    <p>Rate: ${teacher.rate}</p>
                </div>
            </Paper>
        </Grid>
    )
}

export default TeacherCard