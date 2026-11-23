import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [students] = useState([
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

  return <Dashboard students={students} />;
}

export default App;