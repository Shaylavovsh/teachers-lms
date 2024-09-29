import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Attendance = () => {
  const { groupId } = useParams(); // Get the groupId from the URL
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage (mocked for now)
    const data = JSON.parse(localStorage.getItem('attendanceData'));
    if (data && data[groupId]) {
      setAttendanceData(data[groupId]);
    } else {
      setAttendanceData([]); // Empty data if groupId not found
    }
  }, [groupId]);

  // Debugging to check if the attendance data is fetched correctly
  console.log('Attendance Data:', JSON.parse(localStorage.getItem('attendanceData')));

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
