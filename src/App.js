import React from 'react';
import { useState } from "react";
import './App.css';
import data from './data'

import TeamMemberList from './components/TeamMemberList';
import Forms from './components/Forms';

function App() {
  const [members, setMembers] = useState(data)

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Forms addNewMember={addNewMember} />
      <TeamMemberList memberList={members} />
    </div>
  );
}

export default App;
