import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';



function StudentCard({ student, onSelectedStudent, onDeleteStudent }) {
    const { name, instrument } = student
    const teacherName = student.teacher.name

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
                    <img  className='student-image' src={"https://cdn-icons-png.flaticon.com/512/9316/9316730.png"} alt={"student"}/>
                    <p>Instrument Choice: {instrument}</p>
                    <p>Assigned Teacher: {teacherName}</p>
                    <div className="buttons" >
                        <Fab onClick={handleClick} size="small" color="primary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                    </div>
                    <div className='delete-btn'>
                            <IconButton size='medium' onClick={handleDeleteClick} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                </div>
            </Paper>
        </Grid>

    )
}

export default StudentCard