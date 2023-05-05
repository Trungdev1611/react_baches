import { useState } from "react";

function App() {
  const [classRooms, setClassRooms] = useState([
    { id: 1, className: "Sons of Sun", studentCount: 12 },
    { id: 2, className: "Blooming Volcanoes", studentCount: 10 },
    { id: 3, className: "Pillaging Pirates", studentCount: 20 },
    { id: 4, className: "Ping Bombs", studentCount: 8 },
  ]);

  const [selectedClass, setSelectedClass] = useState(null);

  const handleSelect = (id) => {
    setSelectedClass(classRooms.find((classRoom) => classRoom.id === id));
  };
  const handleIncrease = (classIncrease) => {
   
   //nếu chạy như này -code not correct working
    // setClassRooms((prevState) => {
    //   return prevState.map((classRoom) => {
    //     console.log("prev", prevState)
    //     if (classRoom.id === classIncrease.id) {
    //       return { ...classRoom, studentCount: classRoom.studentCount + 1 };
    //     } else return classRoom;
    //   });
    // });

      
   //như này mới đúng
    let findIndex= classRooms.findIndex((classRoom,index) => {
 return classRoom.id === classIncrease.id
    })
    let classRoomCopy = [...classRooms]
    classRoomCopy[findIndex].studentCount = classIncrease.studentCount + 1
    setClassRooms(classRoomCopy)
  };
  return (
    <div className="container">
      <div className="classRooms">
        {classRooms.map((classRoom) => (
          <div className="classRoom" key = {classRoom.id}>
            <div className="text">
              <h4>{classRoom.className}</h4>
              <h2>{classRoom.studentCount}</h2>
            </div>
            <button onClick={() => handleSelect(classRoom.id)}>Select</button>
            <button onClick={() => handleIncrease(classRoom)}>
              Increase Student
            </button>
          </div>
        ))}
      </div>

      <div className="selectedRoom">
        <div className="classRoom">
          <h4>Class Name : {selectedClass?.className}</h4>
          <h2> Student No : {selectedClass?.studentCount}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;