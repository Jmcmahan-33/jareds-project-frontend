function StudentCardEdit({ student, onEditStudent, onChangeForm }) {
    console.log("student",student)

    function handleInputChange(e) {
        console.log("CLICK", e.target.value)
        onChangeForm(e.target.name, e.target.value);
    }

    return (
        <div>
            <h2>Instrument Change</h2>
            <form>
                <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={student.name}
                onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

export default StudentCardEdit