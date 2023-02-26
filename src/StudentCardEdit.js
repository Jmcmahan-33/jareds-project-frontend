
import Button from '@mui/material/Button';

function StudentCardEdit({ student, onEditStudent, onChangeForm }) {


  function handleInputChange(e) {
    onChangeForm(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/students/${student.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          name: student.name,
          instrument: student.instrument
        }
      ),
    })
      .then((r) => r.json())
      .then(onEditStudent);
  }

  if (!student) return null;
  return (
    <div className='change-form'>
      <h2>Student Update</h2>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          className='change-input'
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleInputChange}
        />
        <select
          className='change-input'
          name="instrument"
          value={student.instrument}
          onChange={handleInputChange}
        >
          <option option value="guitar">Guitar</option>
          <option option value="piano" >Piano</option>
          <option option value="vocals">Vocals</option>
        </select>
        <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default StudentCardEdit