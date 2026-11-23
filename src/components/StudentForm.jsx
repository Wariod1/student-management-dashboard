function StudentForm() {
  return (
    <form className="student-form">
      <h2>Register Student</h2>

      <label>
        Student ID
        <input type="text" placeholder="e.g. STU003" />
      </label>

      <label>
        Full Name
        <input type="text" placeholder="Full name" />
      </label>

      <label>
        Email Address
        <input type="email" placeholder="name@example.com" />
      </label>

      <label>
        Course
        <select>
          <option value="">Select a course</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Business</option>
          <option>Engineering</option>
        </select>
      </label>

      <label>
        Year of Study
        <select>
          <option value="">Select year</option>
          <option value="1">Year 1</option>
          <option value="2">Year 2</option>
          <option value="3">Year 3</option>
          <option value="4">Year 4</option>
        </select>
      </label>

      <label>
        Registration Date
        <input type="date" />
      </label>

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;