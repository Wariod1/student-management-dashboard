import { useState } from "react";

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    email: "",
    course: "",
    year: "",
    registrationDate: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addStudent({
      ...formData,
      year: Number(formData.year),
    });

    setFormData({
      id: "",
      fullName: "",
      email: "",
      course: "",
      year: "",
      registrationDate: "",
    });
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Register Student</h2>

      <label>
        Student ID
        <input
          type="text"
          name="id"
          placeholder="e.g. STU003"
          value={formData.id}
          onChange={handleChange}
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

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;