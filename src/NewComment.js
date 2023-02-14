import React, {useState} from "react";

function NewComment({onAddComment}) {
    const [body, setBody] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: body,
          }),
        })
          .then((r) => r.json())
          .then((newComment) => {
            onAddComment(newComment);
            setBody("");
          });
      }
    return <form  onSubmit={handleSubmit}>
    <input
      type="text"
      name="body"
      value={body}
      onChange={(e) => setBody(e.target.value)}
    />
    <button type="submit">Send</button>
  </form>
}

export default NewComment