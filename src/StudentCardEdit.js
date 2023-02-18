function StudentCardEdit({ student, onEditStudent, onChangeForm }) {

    function handleInputChange(e) {
        console.log("CLICK", e.target.value)
        onChangeForm(e.target.name, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/students/${student.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        })
          .then((r) => r.json())
          .then(onEditStudent);
      }
    
      if (!student) return null;

    return (
        <div>
            <h2>Instrument Change</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={student.name}
                onChange={handleInputChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default StudentCardEdit