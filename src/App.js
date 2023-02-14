import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import TeacherContainer from './TeacherContainer';

function App() {
  const [teachers, setTeachers] = useState([])

// Teachers fetch
useEffect(()=> {
  fetch("http://localhost:9292/teachers")
  .then((response) => response.json())
  .then((data) => setTeachers(data))
}, [])
  



// fetch("http://localhost:9292/teachers")
  // .then((r) => r.json())
  // .then((data) => console.log(data))


  return (
    <div>
      <Header/>
      <TeacherContainer teachers={teachers}/>
    </div>
  );
}

export default App;
