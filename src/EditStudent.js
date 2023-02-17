
function EditStudent({onUpdateStudent, student}) {

    // function handleSubmit(e) {
    //     // const [editedInstrument, setEditedInstrument] = useState("")
    //     e.preventDefault()
    //     fetch(`http://localhost:9292/students/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
        
    //         }),
    //     })
    //     .then((r) => r.json())
    //   .then((updatedInstrument) => onUpdateStudent(updatedInstrument));
    // }

    return (
        // <form onSubmit={handleSubmit}>
        //         <input
        //             value={editedInstrument}
        //             onChange={(e) => setEditedInstrument(e.target.value)}
        //         />

        //     </form>
        <div>
            <p>Hello from Edit Student </p>
        </div>
        
    )
}

export default EditStudent