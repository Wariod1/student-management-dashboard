import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard({ students, addStudent, deleteStudent }) {
  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <div className="summary">
        <h2>Total Students: {students.length}</h2>
      </div>

      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default Dashboard;