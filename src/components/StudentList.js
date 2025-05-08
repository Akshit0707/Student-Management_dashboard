// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// Set up mock API
const mock = new AxiosMockAdapter(axios);
mock.onGet('/api/students').reply(200, [
  { id: 1, name: 'John Doe', course: 'Math' },
  { id: 2, name: 'Jane Smith', course: 'Science' },
  { id: 3, name: 'Sam Johnson', course: 'History' },
]);

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Fetch students data from mock API
  useEffect(() => {
    axios.get('/api/students').then((response) => {
      setStudents(response.data);
      setFilteredStudents(response.data); // Initialize with all students
    });
  }, []);

  // Handle course filter change
  const handleCourseChange = (event) => {
    const course = event.target.value;
    setSelectedCourse(course);
    if (course) {
      setFilteredStudents(students.filter((student) => student.course === course));
    } else {
      setFilteredStudents(students);
    }
  };

  return (
    <div>
      <h1>Student Dashboard</h1>

      {/* Filter by Course */}
      <select onChange={handleCourseChange} value={selectedCourse}>
        <option value="">All Courses</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>

      {/* Display Student List */}
      <ul>
        {filteredStudents.map((student) => (
          <li key={student.id}>
            {student.name} - {student.course}
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default StudentList;
