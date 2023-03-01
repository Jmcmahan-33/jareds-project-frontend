import { Link } from "react-router-dom"
import ShowStudents from "./ShowStudents"
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";




function TeacherLinks({teachers}) {
    const match = useRouteMatch();
console.log("ASSIGNED", teachers)
const teacherLinks = teachers.map(teacher => {
    return (
      <li><Link to={`/teachers-students/${teacher.id}`}>{teacher.name}</Link></li>  
    )   
})
return (
    <div>
        <h2>Teachers</h2>
      <ul>{teacherLinks}</ul>  
      <Route path={`${match.url}/:teacherId`}>
        <ShowStudents teachers={teachers} />
      </Route>
      <Route exact path={match.url}>
        <h3>Choose a teacher from the list above</h3>
      </Route>
    </div>
     
)  
}

export default TeacherLinks


// return(
//     <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
// )