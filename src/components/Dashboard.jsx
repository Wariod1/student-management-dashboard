import { useState } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import SearchBar from "./SearchBar";
import CourseFilter from "./CourseFilter";

function Dashboard({
  students,
  addStudent,
  deleteStudent,
  updateStudent,
  editingStudent,
  setEditingStudent,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const filteredStudents = students
    .filter((student) => {
      const term = searchTerm.toLowerCase();
      return (
        student.fullName.toLowerCase().includes(term) ||
        student.id.toLowerCase().includes(term)
      );
    })
    .filter((student) => {
      return selectedCourse === "" || student.course === selectedCourse;
    });

  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>

      <div className="summary">
        <h2>Total Students: {students.length}</h2>
      </div>

      <StudentForm
        students={students}
        addStudent={addStudent}
        updateStudent={updateStudent}
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
      />

      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CourseFilter
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      </div>

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        setEditingStudent={setEditingStudent}
      />
    </div>
  );
}

export default Dashboard;