function StudentCardEdit({ student, onEditStudent, onChangeForm }) {


  function handleInputChange(e) {
    console.log("CLICK", e.target.value)
    onChangeForm(e.target.name, e.target.value);
  }

  function handleRadioChange(event) {
    onChangeForm(event.target.name, event.target.value);
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
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name="guitar"
          value={student.instrument}
          onChange={handleRadioChange}
        />
        Guitar
        <input
          type="radio"
          name="piano"
          value={student.instrument}
          onChange={handleRadioChange}
        />
        Piano
        <input
          type="radio"
          name="vocals"
          value={student.instrument}
          onChange={handleRadioChange}
        />
        Vocals
        <button>Submit</button>
      </form>
    </div>
  )
}

export default StudentCardEdit