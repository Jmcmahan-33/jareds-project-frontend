import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherContainer from './TeacherContainer';
import StudentContainer from './StudentContainer';
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
      <TeacherContainer teachers={teachers}/>
      <StudentContainer students={students}/>
      {/* <CommentContainer id={students.id} onAddComment={handleAddComment} comments={comments}/> */}
    </div>
  );
}

export default App;
