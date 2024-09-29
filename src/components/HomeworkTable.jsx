const students = [
    { name: 'Botirov Muhammadali', status: 'Not Checked', grade: '-', comment: '-' },
    { name: 'Hasanov Zubayrxon', status: 'Not Uploaded', grade: '-', comment: '-' },
    { name: 'Jaloliddin Inomov', status: 'Not Uploaded', grade: '-', comment: '-' },
    { name: 'Jaloliddin Inomov', status: 'Checked', grade: '100', comment: '-', statusColor: 'bg-yellow-400' },
    { name: 'Mirzohidov Umidjon', status: 'Denied', grade: '0', comment: '-', statusColor: 'bg-red-400' },
    { name: 'Safarov Sanjar', status: 'Not Uploaded', grade: '-', comment: '-' },
    { name: 'Samir Sadullayev', status: 'Not Uploaded', grade: '-', comment: '-' },
    { name: 'Sherzod Skandarov', status: 'Checked', grade: '75', comment: '-', statusColor: 'bg-green-400' },
    { name: 'Suxrob Sadullayev', status: 'Not Checked', grade: '-', comment: '-' },
    { name: 'Elshod Turqunjonov', status: 'Not Uploaded', grade: '-', comment: '-' }
  ];
  
  const HomeworkTable = () => {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Homework</h2>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Студенты</th>
              <th>Статус</th>
              <th>Отметка</th>
              <th>Комментарий</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx} className={student.statusColor ? student.statusColor : ''}>
                <td>{idx + 1}. {student.name}</td>
                <td className={student.statusColor ? `text-white ${student.statusColor}` : ''}>{student.status}</td>
                <td>{student.grade}</td>
                <td>{student.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <button className="btn btn-xs">1 / 6</button>
        </div>
      </div>
    );
  };
  
  export default HomeworkTable;
  