import React, { useState } from "react";
import styled from 'styled-components';

const FormArea = styled.form `
    background-color: #468054;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin-top: 3%;
`
const InputAreas = styled.div `
    margin: 5% auto;
    display: flex;
    justify-content: space-evenly;
`

const Labels = styled.label `
    color: white;
    margin-right: 4%;
`

const SubmitButton = styled.button `
    border-radius: 4px;
    border: 1px rounded black;
    margin: 1% auto;

`

const Forms = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role:"" });
  };

  return (
    <FormArea onSubmit={submitForm}>
      <InputAreas>
      <Labels htmlFor="name">Name</Labels>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        onChange={changeHandler}
        value={member.name}
      />
      </InputAreas>
      <InputAreas>
      <Labels htmlFor="email">Email</Labels>
      <input
        name="email"
        id="email"
        placeHolder="email"
        onChange={changeHandler}
        value={member.email}
      />
      </InputAreas>
      <InputAreas>
      <Labels htmlFor="role">Role</Labels>
      <input
        name="role"
        id="role"
        placeHolder="role"
        type="text"
        onChange={changeHandler}
        value={member.role}
        />
        </InputAreas>
      <SubmitButton type="submit">Add Member</SubmitButton>
    </FormArea>
  );
};

export default Forms;