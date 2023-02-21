import StudentCard from "./StudentCard"
import Container from '@mui/material/Container';
import  Grid  from "@mui/material/Grid";

function StudentList({ students, onSelectedStudent, onDeleteStudent }) {
    const studentItems = students.map(student => {

        return (
            <StudentCard
                key={student.id}
                student={student}
                onSelectedStudent={onSelectedStudent}
                onDeleteStudent={onDeleteStudent}
            />
        )
    })

    return (
        <div className="page-header">
            <h2>STUDENTS</h2>
            <Container>
                <Grid container spacing={5}>
                  {studentItems}  
                </Grid>
                
            </Container>

        </div>
    )
}

export default StudentList