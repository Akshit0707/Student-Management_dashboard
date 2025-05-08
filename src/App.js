import Routing from "./routing/Routing";
import './App.css'
import StudentList from "./components/StudentList";
import React from 'react';

function App() {
  return (
    <>
    <div className="App">
      <StudentList />
    </div>
      <Routing />
    </>
  );
}

export default App;
