import React, { useState } from "react";

import "./App.css";

function App() {
  const [acceptCount,setacceptCount] = useState(0);
  const studentsData = [
    {
      name: "Surendiran",
      work: "SAP",
      education: "B.E",
    },
    {
      name: "Abarnaa",
      work: "Developer",
      education: "M.Sc.,",
    },
    {
      name: "Thoshith",
      work: "Pilot",
      education: "Aeronautics",
    },
    {
      name: "Surabi",
      work: "Doctor",
      education: "MBBS,Cardiologist",
    },
  ];
  return (
    <div className="App">
      <h1>Accepted Students : {acceptCount}</h1>
      <div className="card-block">
        {studentsData.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            work={student.work}
            education={student.education}
            acceptCount={acceptCount}
            setacceptCount={setacceptCount}
          />
        ))}
      </div>
    </div>
  );
}

//destructuring {name,work,education} = props
//function StudentCard (props) intha props ku pathil {name,work,education}

function StudentCard({ name, work, education, acceptCount, setacceptCount}) {
  const [show, setShow] =useState(true)
  function handleAccept() {
    setShow(!show)
    setacceptCount(acceptCount + 1)
  }
  function handleReject(){
    setShow(!show)
    setacceptCount(acceptCount - 1)
  }

  return (
    <div className="student-card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s"
        alt="face"
      />
      <h1>{name}</h1>
      <p>{work}</p>
      <h4>{education}</h4>
      { show ? <button
        className="accept-btn btn"
        onClick={handleAccept}
      >
        Accept
      </button>
        :
      <button
        className="reject-btn btn"
        onClick={handleReject}
      >
        Reject
      </button>
}
    </div>
  );
}

export default App;
