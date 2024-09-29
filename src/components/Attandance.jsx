import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Attendance = () => {
  const { groupId } = useParams(); // Get the groupId from the URL
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage and ensure proper format
    try {
      const storedData = localStorage.getItem('attendanceData');
      const parsedData = storedData ? JSON.parse(storedData) : null;
      if (parsedData && parsedData[groupId]) {
        setAttendanceData(parsedData[groupId]);
      } else {
        setAttendanceData([]); // If no data for the specific groupId
      }
    } catch (error) {
      console.error('Failed to parse attendance data from localStorage:', error);
      setAttendanceData([]); // Set to empty array if error occurs
    }
  }, [groupId]);

  return (
    <div>
      <h1>Attendance for Group: {groupId}</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>League</th>
            <th>Last Visit</th>
            <th>Total</th>
            <th>Today</th>
            <th>Coin Limit</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.length ? (
            attendanceData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.league}</td>
                <td>{student.lastVisit}</td>
                <td>{student.total}</td>
                <td>{student.today}</td>
                <td>{student.coinLimit}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No attendance data found for this group.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
