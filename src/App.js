import React from 'react';
import { useState } from "react";
import styled from 'styled-components';

import './App.css';
import data from './data';
import TeamMemberList from './components/TeamMemberList';
import Forms from './components/Forms';

const Container = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 3% auto;
    width: 900px;
    background-color: #6D95EE;
`

function App() {
  const [members, setMembers] = useState(data)

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <Container>
      <Forms addNewMember={addNewMember} />
      <TeamMemberList memberList={members} />
    </Container>
  );
}

export default App;
