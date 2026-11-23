import { useState, useEffect } from "react";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const emptyForm = {
  id: "",
  fullName: "",
  email: "",
  course: "",
  year: "",
  registrationDate: "",
};

function StudentForm({
  students,
  addStudent,
  updateStudent,
  editingStudent,
  setEditingStudent,
}) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    } else {
      setFormData(emptyForm);
    }
    setErrors({});
  }, [editingStudent]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (formData.id.trim() === "") {
      newErrors.id = "Student ID is required.";
    } else if (
      !editingStudent &&
      students.some(
        (student) =>
          student.id.toLowerCase() === formData.id.trim().toLowerCase()
      )
    ) {
      newErrors.id = "This Student ID already exists.";
    }

    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full name is required.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (formData.course === "") {
      newErrors.course = "Please select a course.";
    }

    if (formData.year === "") {
      newErrors.year = "Please select a year of study.";
    }

    if (formData.registrationDate === "") {
      newErrors.registrationDate = "Registration date is required.";
    } else if (formData.registrationDate > getToday()) {
      newErrors.registrationDate = "Registration date cannot be in the future.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const studentData = {
      ...formData,
      id: formData.id.trim(),
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
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
    setErrors({});
  }

  return (
    <form className="student-form" onSubmit={handleSubmit} noValidate>
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
        {errors.id && <span className="error">{errors.id}</span>}
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
        {errors.fullName && <span className="error">{errors.fullName}</span>}
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
        {errors.email && <span className="error">{errors.email}</span>}
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
        {errors.course && <span className="error">{errors.course}</span>}
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
        {errors.year && <span className="error">{errors.year}</span>}
      </label>

      <label>
        Registration Date
        <input
          type="date"
          name="registrationDate"
          value={formData.registrationDate}
          onChange={handleChange}
          max={getToday()}
        />
        {errors.registrationDate && (
          <span className="error">{errors.registrationDate}</span>
        )}
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