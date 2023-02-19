function StudentCardEdit({ student, onEditStudent, onChangeForm }) {


  function handleInputChange(e) {
    console.log("CLICK", e.target.value)
    onChangeForm(e.target.name, e.target.value);
  }

  function handleDropDownChange(event) {
    console.log("INPUT", event.target.value )
    onChangeForm(event.target.name,event.target.value);
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

  // grab student > instrument column value
  // update instrument using state 

  return (
    <div>
      <h2>Instrument Change</h2>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleInputChange}
        />
        <select
         name="instrument"
         value={student.instrument}
         onChange={handleDropDownChange}
        >
          <option option value="all">Choose Instrument</option>
          <option option value="guitar">Guitar</option>
          <option option value="piano" >Piano</option>
          <option option value="vocals">Vocals</option>

        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default StudentCardEdit