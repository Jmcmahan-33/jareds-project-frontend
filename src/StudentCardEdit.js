// import { useState } from 'react';

function StudentCardEdit({ student, onEditStudent, onChangeForm }) {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   instrument: ""
  // })

  // console.log("CLICK", formData)


  function handleInputChange(e) {
   
    onChangeForm(e.target.name, e.target.value);
    // setFormData({[e.target.name]:e.target.value})
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



  // grab student > instrument column value
  // update instrument using state 
  //initial Get 

  return (
    <div className='change-form'>
      <h2>Student Update</h2>
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
        // check on state managment 
        // tiggers initial fetch to call everything again. 
         onChange={handleInputChange}
        >
          <option>Choose Instrument</option>
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