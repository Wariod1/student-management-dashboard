function CourseFilter({ selectedCourse, setSelectedCourse }) {
  return (
    <select
      className="course-filter"
      value={selectedCourse}
      onChange={(e) => setSelectedCourse(e.target.value)}
    >
      <option value="">All Courses</option>
      <option>Computer Science</option>
      <option>Information Technology</option>
      <option>Business</option>
      <option>Engineering</option>
    </select>
  );
}

export default CourseFilter;