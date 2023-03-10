import { Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import StudentSignUp from './StudentSignUp';
import StudentCardEdit from './StudentCardEdit';
import TeacherHire from './TeacherHire';
import Home from './Home';
import Navbar from './NavBar';


function App() {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)


  useEffect(() => {
    fetch("http://localhost:9292/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
  }, [])

  function handleAddTeacher(newTeacher) {
    setTeachers([...teachers, newTeacher]);
  }

  useEffect(() => {
    fetch("http://localhost:9292/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
  }, [])

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  function handleChangeForm(name, value) {
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

  function handleDeletStudent(id) {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  }
  return (
    <div>
      <Header />
      <Navbar />
      <StudentCardEdit
        student={selectedStudent}
        onEditStudent={handleEditStudent}
        onChangeForm={handleChangeForm}
      />
      <Switch>
        <Route path="/teachers">
          <TeacherList teachers={teachers} />
        </Route>
        <Route path="/students">
          <StudentList students={students} onSelectedStudent={setSelectedStudent} onDeleteStudent={handleDeletStudent} />
        </Route>
        <Route path="/teacher_hire">
          <TeacherHire teachers={teachers} onAddTeacher={handleAddTeacher} />
        </Route>
        <Route path="/student_signup">
          <StudentSignUp teachers={teachers} onAddStudents={handleAddStudent} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
