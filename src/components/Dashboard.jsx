import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function Dashboard({ students }) {
  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <div className="summary">
        <h2>Total Students: {students.length}</h2>
      </div>

      <StudentForm />
      <StudentList students={students} />
    </div>
  );
}

export default Dashboard;