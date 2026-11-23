import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard({
  students,
  addStudent,
  deleteStudent,
  updateStudent,
  editingStudent,
  setEditingStudent,
}) {
  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <div className="summary">
        <h2>Total Students: {students.length}</h2>
      </div>

      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />
    </div>
  );
}

export default Dashboard;