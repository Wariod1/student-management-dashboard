import { useState, useEffect } from "react";

const emptyForm = {
  id: "",
  fullName: "",
  email: "",
  course: "",
  year: "",
  registrationDate: "",
};

function StudentForm({
  addStudent,
  updateStudent,
  editingStudent,
  setEditingStudent,
}) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(emptyForm);
    }
  }, [editingStudent]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const studentData = {
      ...formData,
      year: Number(formData.year),
    };

    if (editingStudent) {
      updateStudent(studentData);
    } else {
      addStudent(studentData);
    }

    setFormData(emptyForm);
  }

  function handleCancel() {
    setEditingStudent(null);
    setFormData(emptyForm);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Edit Student" : "Register Student"}</h2>

      <label>
        Student ID
        <input
          type="text"
          name="id"
          placeholder="e.g. STU003"
          value={formData.id}
          onChange={handleChange}
          disabled={editingStudent !== null}
        />
      </label>

      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Course
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select a course</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Business</option>
          <option>Engineering</option>
        </select>
      </label>

      <label>
        Year of Study
        <select name="year" value={formData.year} onChange={handleChange}>
          <option value="">Select year</option>
          <option value="1">Year 1</option>
          <option value="2">Year 2</option>
          <option value="3">Year 3</option>
          <option value="4">Year 4</option>
        </select>
      </label>

      <label>
        Registration Date
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button type="button" className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;