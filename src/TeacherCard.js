import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";


function TeacherCard({ teacher }) {

  
   
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <div className='teacher-info'>
                    <h4 className='teacher-name'>{teacher.name}</h4>
                    <img className='teacher-image' src={'https://cdn-icons-png.flaticon.com/512/2354/2354280.png'} alt={"teacher"} />
                    <p className='teacher-p'>Primary Instrument: {teacher.musical_talents}</p>
                    <p className='teacher-p'>Rate: ${teacher.rate}</p>
                </div>
            </Paper>
        </Grid>
    )
}

export default TeacherCard