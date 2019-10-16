import React, { useState } from "react";

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
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        onChange={changeHandler}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        placeHolder="Type your note here"
        onChange={changeHandler}
        value={member.email}
      />
      <label htmlFor="role">Role</label>
      <input
        name="role"
        id="role"
        placeHolder="role"
        type="text"
        onChange={changeHandler}
        value={member.role}
        />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Forms;