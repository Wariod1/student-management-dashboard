function StudentList({ students, deleteStudent, setEditingStudent }) {
  function handleDelete(student) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.fullName}?`
    );

    if (confirmed) {
      deleteStudent(student.id);
    }
  }

  return (
    <div className="student-list">
      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p className="empty-message">No students found.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Year</th>
                <th>Registered</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.fullName}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>
                  <td>{student.registrationDate}</td>
                  <td>
                    <button onClick={() => setEditingStudent(student)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(student)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;