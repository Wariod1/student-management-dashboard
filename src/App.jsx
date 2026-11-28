import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

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

function loadLoggedIn() {
  return sessionStorage.getItem("isLoggedIn") === "true";
}

function App() {
  const [students, setStudents] = useState(loadStudents);
  const [editingStudent, setEditingStudent] = useState(null);
  const [theme, setTheme] = useState(loadTheme);
  const [isLoggedIn, setIsLoggedIn] = useState(loadLoggedIn);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", String(isLoggedIn));
  }, [isLoggedIn]);

  function handleLogin(username, password) {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setEditingStudent(null);
  }

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

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
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
      onLogout={handleLogout}
    />
  );
}

export default App;