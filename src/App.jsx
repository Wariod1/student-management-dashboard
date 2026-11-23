import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [students, setStudents] = useState([
    {
      id: "STU001",
      fullName: "Amina Hassan",
      email: "amina@example.com",
      course: "Computer Science",
      year: 2,
      registrationDate: "2026-09-01",
    },
    {
      id: "STU002",
      fullName: "Brian Otieno",
      email: "brian@example.com",
      course: "Business",
      year: 1,
      registrationDate: "2026-09-03",
    },
  ]);

  const [editingStudent, setEditingStudent] = useState(null);

  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  function deleteStudent(studentId) {
    const updatedStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudents);
  }

  function updateStudent(updatedStudent) {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
  }

  return (
    <Dashboard
      students={students}
      addStudent={addStudent}
      deleteStudent={deleteStudent}
      updateStudent={updateStudent}
      editingStudent={editingStudent}
      setEditingStudent={setEditingStudent}
    />
  );
}

export default App;