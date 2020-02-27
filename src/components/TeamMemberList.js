import React from 'react';
import styled from 'styled-components';

const TeamMemberListStyle = styled.div `
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 2%;
        padding: 0 2%;
`
const TeamMemberCard = styled.div `
        width: 25%;
        background-color: #162C5D;
        color: white;
        padding: 1%;
        margin: 2%;
        text-align: center;

`

const TeamMemberList = props => {
    return (
        <TeamMemberListStyle>
            {props.memberList.map((member, index) => {
                return(
                    <TeamMemberCard key={index}>
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                        <button>Edit</button>
                    </TeamMemberCard>
                )
            })}
        </TeamMemberListStyle>
    )
}

export default TeamMemberList