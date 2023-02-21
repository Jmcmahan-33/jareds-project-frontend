import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import StudentSignUp from './StudentSignUp';
import StudentCardEdit from './StudentCardEdit';
import TeacherHire from './TeacherHire';
// import CommentContainer from './CommentContainer';


//before table drop 
function App() {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  // const [comments, setComments] = useState([])

  // Teachers fetch
  useEffect(() => {
    fetch("http://localhost:9292/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
  }, [])

  //Post Teacher 
  function handleAddTeacher(newTeacher) {
    setTeachers([...teachers, newTeacher]);
  }

  //Student Fetch 
  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
  }, [])
  // Add Student 
  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }
  //Update Student 
  function handleChangeForm(name,value) {
    setSelectedStudent({
      ...selectedStudent,
      [name]: value,
    })
  }
  function handleEditStudent(updatedStudent) {
    console.log("STUDENTS", updatedStudent)
    const updatedStudents = students.map(student => student.id === updatedStudent.id ? updatedStudent : student)
    setSelectedStudent(updatedStudent)
    setStudents(updatedStudents)
  }

  // need first GET of Students to be fetched again 
  // map through Student list in the fetch  
  // .then(data=>setStudents(data.map))  


  //DELETE STUDENT 
  function handleDeletStudent(id) {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  }




  return (
    <div>
      <Header />
      <TeacherHire teachers={teachers} onAddTeacher={handleAddTeacher}/>
      <TeacherList teachers={teachers} />
      <StudentList students={students} onSelectedStudent={setSelectedStudent} onDeleteStudent={handleDeletStudent} />
      <StudentCardEdit
        student={selectedStudent}
        onEditStudent={handleEditStudent}
        onChangeForm={handleChangeForm} />
      <StudentSignUp teachers={teachers} onAddStudents={handleAddStudent} />
    </div>
  );
}

export default App;
