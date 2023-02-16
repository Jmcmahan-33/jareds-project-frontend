// import React, { useState } from "react";

// function NewComment({ id, onAddComment, student_id }) {
//     const [newAddedComment, setNewAddedComment] = useState({
//         body: "",
//         student_id: student_id,
//     });

//     // new variable called newComment 



//     function handleSubmit(e) {

//         e.preventDefault();
//         const newComment = {
//             body: newAddedComment.body,
//             student_id: newAddedComment.student_id
//         }
//         fetch("http://localhost:9292/comments", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newComment),
//         })
//             .then((r) => r.json())
//             .then((newComment) => {
//                 onAddComment(newComment);
//                 setNewAddedComment("");
//             });
//     }

//     function handleAddNew(e) {
//         setNewAddedComment({
//             [e.target.name]:e.target.value 
//         })
//     }
//     console.log("HIIII",newAddedComment)
//     return <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             name="body"
//             value={newAddedComment.body}
//             onChange={handleAddNew}
//         />
//         <select name="student">
//             <option value={id}>Joey </option>
//         </select>
        
//         <button type="submit">Send</button>
//     </form>
// }

// export default NewComment