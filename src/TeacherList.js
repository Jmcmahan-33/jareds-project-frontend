import Container from '@mui/material/Container';
import  Grid  from "@mui/material/Grid";
import TeacherCard from "./TeacherCard"

function TeacherList({ teachers }) {

    const teacherItems = teachers.map(teacher => {
        return (
            <TeacherCard
                key={teacher.id}
                teacher={teacher}
            />
        )
    })
    return (
        <div className='page-header'>
            <h2>TEACHERS</h2>
             <Container>
                <Grid container spacing={5}>
                  {teacherItems}  
                </Grid>
            </Container>
        </div>
    )
}

export default TeacherList