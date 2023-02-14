import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherContainer from './TeacherContainer';
import StudentContainer from './StudentContainer';

function App() {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])

// Teachers fetch
useEffect(()=> {
  fetch("http://localhost:9292/teachers")
  .then((response) => response.json())
  .then((data) => setTeachers(data))
}, [])

//Student Fetch 
useEffect(()=> {
  fetch("http://localhost:9292/students")
  .then((response) => response.json())
  .then((data) => setStudents(data))
}, [])
  



// fetch("http://localhost:9292/teachers")
  // .then((r) => r.json())
  // .then((data) => console.log(data))


  return (
    <div>
      <Header/>
      <TeacherContainer teachers={teachers}/>
      <StudentContainer students={students}/>
    </div>
  );
}

export default App;
