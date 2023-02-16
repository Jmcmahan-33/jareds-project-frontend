import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherList from './TeacherList';
import StudentList from './StudentList';
import StudentSignUp from './StudentSignUp';
// import CommentContainer from './CommentContainer';

function App() {
  const [teachers, setTeachers] = useState([])
  const [students, setStudents] = useState([])
  // const [comments, setComments] = useState([])

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

function handleAddStudent(newStudent) {
  setStudents([...students, newStudent]);
}
  

//Comment Fetch
// useEffect(()=> {
//   fetch("http://localhost:9292/comments")
//   .then((response) => response.json())
//   .then((data) => setComments(data))
// }, [])

//Add Teacher with Post
// function handleAddComment(newComment) {
//   setComments([...comments, newComment])
// }

  return (
    <div>
      <Header/>
      <TeacherList teachers={teachers}/>
      <StudentList students={students}/>
      <StudentSignUp onAddStudents={handleAddStudent}/>
      {/* <CommentContainer id={students.id} onAddComment={handleAddComment} comments={comments}/> */}
    </div>
  );
}

export default App;
