import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";

const defaultStudents = [
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
];

function loadStudents() {
  const saved = localStorage.getItem("students");

  if (saved) {
    return JSON.parse(saved);
  }

  return defaultStudents;
}

function loadTheme() {
  const saved = localStorage.getItem("theme");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function App() {
  const [students, setStudents] = useState(loadStudents);
  const [editingStudent, setEditingStudent] = useState(null);
  const [theme, setTheme] = useState(loadTheme);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

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
      theme={theme}
      toggleTheme={toggleTheme}
    />
  );
}

export default App;